import React,{Fragment} from 'react';
import PageHeader from "../../components/PageHeader";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";

import ServicesData from "../../data/Services/services";

const ServiceDetails = () => {
    const serviceID = new URLSearchParams(window.location.search).get("id");
    const service = ServicesData.find((serviceItem) => serviceItem.id === parseInt(serviceID));
    const currentService = ServicesData.indexOf(service);
    let prevService;
    let nextService;
    currentService === 0 ? prevService = ServicesData[currentService] : prevService = ServicesData[currentService-1];
    currentService+1 === ServicesData.length ? nextService = ServicesData[currentService] : nextService = ServicesData[currentService+1];

    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={service.title}
                content={service.shortDesc}
            />

            <PageWrapper classes="sm-top service-details-wrapper">
                <ServiceContentWrap
                    service={service}
                    totalService={ServicesData.length}
                    nextService={nextService}
                    prevService={prevService}
                />

                <Sidebar classes={'col-lg-4 mtn-40'}>
                    <SidebarItem title="Services">
                        <List classes="service-list">
                            {
                                ServicesData.map(serviceItem=>(
                                    <LI key={serviceItem.id}>
                                        <a href={`${process.env.PUBLIC_URL + `/service/${serviceItem.title.split(' ').join('-').toLowerCase()}?id=${serviceItem.id}`}`}>
                                            {serviceItem.title}
                                        </a>
                                    </LI>
                                ))
                            }
                        </List>
                    </SidebarItem>

                    <SidebarItem title="Download Brochure">
                        <List classes="service-list">
                            <LI><Anchor path='/'><i className="fa fa-file-pdf-o"/>Brochures.PDF</Anchor></LI>
                            <LI><Anchor path='/'><i className="fa fa-file-word-o"/>Brochures.DOC</Anchor></LI>
                        </List>
                    </SidebarItem>
                </Sidebar>
            </PageWrapper>

            <RelatedServices/>
        </Fragment>
    );
};

export default ServiceDetails;