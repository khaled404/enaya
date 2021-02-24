import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fold from "../components/Fold";
import Specialties from "../components/Specialties";
import MobileMenu from "../components/MobileMenu";

const SpecialtiesPage = () => {
  return (
    <Fragment>
      <Header />
      <section className="specialties">
        <div className="container">
          <Specialties pageTitle="SpecialtiesPage" />
        </div>
      </section>
      <Fold PageName="fold" />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default SpecialtiesPage;
