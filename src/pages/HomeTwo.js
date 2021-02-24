import React, {Fragment} from 'react';

import Header from '../components/Header'
import Slider from '../components/Slider/home-two'
import About from '../components/About/home-two'
import Services from '../components/Services'
import Features from '../components/Features'
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";
import Blog from "../components/Blog";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const HomeTwo = () => {
    return (
        <Fragment>
            <Header/>
            <Slider/>
            <About/>
            <Services/>
            <Features classes="sp-top"/>
            <Testimonial/>
            <Team/>
            <Blog/>
            <BrandLogo/>
            <Funfact/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default HomeTwo;