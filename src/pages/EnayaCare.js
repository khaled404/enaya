import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageContnet from "../components/PageContent";
import Footer from "../components/Footer";
import AppHeader from "../assets/img/pageHeader/enaya-care.png";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";
const EnayaCare = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header postion="contact" />
      <PageHeader
        title={t("We think about you")}
        bgImg={AppHeader}
        content="Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, "
        color="dark"
      />
      <PageContnet
        subtitle={t("Enaya")}
        title={t("Enaya Care Program")}
        content="Enaya is a leading digital healthcare booking platform and practice management software in Egypt.
                                                                        With over 5000 verified reviews, patients are able to search, compare, and book the best doctors 
                                                                        in just 1 minute. Doctors also provide Patients with seamless healthcare experiences through our
                                                                        clinic management software. We strive to lead every aspect of the healthcare industry and continue
                                                                        to launch products that have positive impact on people’s lives."
      />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default EnayaCare;
