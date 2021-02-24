import React from 'react';
import TestimonialItem from "./TestimonialItem"
import SectionTitle from "../../UI/SectionTitle"

import TestimonialData from '../../../data/Testimonials/home-one'
import SlickSlider from "../../UI/Slick";

function Testimonials() {
    const settings = {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        className: "testimonial-content--3 testimonial-grid",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="testimonial-area bg-offwhite sp-y sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <SectionTitle
                            title="TESTIMONIALS"
                            heading="Our Customer <br/>Loves What we do"
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-11 m-auto">
                        <div className="testimonial-content-wrap m-0 pl-0">
                            <SlickSlider settings={settings}>
                                {
                                    TestimonialData.map(testimonial => (
                                        <div key={testimonial.id}>
                                            <TestimonialItem
                                                author={testimonial.author}
                                                authorThumb={testimonial.authorThumb}
                                                quote={testimonial.quote}
                                            />
                                        </div>
                                    ))
                                }
                            </SlickSlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;