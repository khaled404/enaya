import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageContnet from "../components/PageContent";
import Footer from "../components/Footer";
import AppHeader from "../assets/img/pageHeader/about-header.png";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header postion="contact" />
      <PageHeader
        title={t("We care about you")}
        bgImg={AppHeader}
        color="dark"
      />
      <PageContnet
        subtitle={t("Enaya")}
        title={t("About Enaya")}
        content={
          <div className="content">
            <p>{t("aboutEnaya")}</p>
            <p>{t("aboutEnaya1")}</p>
          </div>
        }
      />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default AboutUs;
