import React from 'react';
import SlickSlider from "../UI/Slick";
import LogoItem from './LogoItem'
import BrandLogos from '../../data/BrandLogo/brandlogo'

function BrandLogo(props) {
    const settings = {
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        className: "brand-logo-content",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="brand-logo-area sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SlickSlider settings={settings}>
                            {
                                BrandLogos.map(logo => (
                                    <LogoItem key={logo.id} logoSrc={logo.logoSrc} URL={logo.URL}/>
                                ))
                            }
                        </SlickSlider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandLogo;