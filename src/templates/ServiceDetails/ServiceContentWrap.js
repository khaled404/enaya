import React from 'react';
import SlickSlider from "../../components/UI/Slick";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import IconBox from "../../components/IconBox";
import Text from "../../components/UI/Text";

import HowWeWorksData from "../../data/HowWeWorks/how-we-works";

const ServiceContentWrap = ({service,totalService,prevService,nextService}) => {
    return (
        <div className="col-lg-8">
            <div className="service-details-content">
                <div className="service-thumbnail-wrapper">
                    <SlickSlider settings={{
                        className: "service-details-thumb",
                        arrows: false,
                        dots: true
                    }}>
                        {
                            service.previewImages.map((previewImg, indx) => (
                                <div key={indx}>
                                    <img src={require('../../assets/img/' + previewImg)} alt={service.title} />
                                </div>
                            ))
                        }
                    </SlickSlider>
                </div>

                <div className="service-details-info">
                    <h3>{service.title}</h3>
                    <p>{service.shortDesc}</p>

                    <div className="about-service mt-50 mt-sm-35">
                        <h4>About this Service</h4>
                        {
                            <div dangerouslySetInnerHTML={{__html: service.aboutServiceDesc}}/>
                        }
                        <List classes="service-feature mt-30">
                            {
                                service.features.map((feature,indx)=>(
                                    <LI key={indx}>{feature}</LI>
                                ))
                            }
                        </List>
                    </div>

                    <div className="how-we-works-wrap mt-50 mt-sm-35">
                        <h4>How we work</h4>
                        <Text styles={{marginBottom:20}}>
                            voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt
                            ut labore et dolore magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum
                        </Text>

                        <div className="how-we-works-content service-details-page">
                            <div className="row">
                                {
                                    HowWeWorksData.map(iconbox=>(
                                        <IconBox
                                            key={iconbox.id}
                                            icon={iconbox.icon}
                                            title={iconbox.title}
                                            text={iconbox.text}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="pagination-wrap">
                        <ul className="pagination">
                            <li className="prev">
                                <a href={`${process.env.PUBLIC_URL + `/service/${prevService.title.split(' ').join('-').toLocaleLowerCase()}?id=${prevService.id}`}`}
                                   className={service.id === 1 ? "disabled" : null}
                                >
                                    <i className="fa fa-long-arrow-left"/> Previous
                                </a>
                            </li>
                            <li className="next">
                                <a href={`${process.env.PUBLIC_URL + `/service/${nextService.title.split(' ').join('-').toLocaleLowerCase()}?id=${nextService.id}`}`}
                                   className={service.id === totalService ? "disabled" : null}
                                >
                                    Next <i className="fa fa-long-arrow-right"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContentWrap;