import React, { Fragment } from "react";
import Header from "../components/Header";
import Specialties from "../components/Specialties";
import About from "../components/About/home-one";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import LoginSection from "../components/LoginSection";
import Fold from "../components/Fold";
import HomeService from "../components/Services/HomeService";

const HomeOne = () => {
  return (
    <Fragment>
      <Header postion="home" />
      <Fold PageName="home" />
      <Specialties pageTitle="HomePage" />
      <About />
      <HomeService />
      <LoginSection />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default HomeOne;
