import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ContactHeader from "../assets/img/pageHeader/contact_header.png";
import PageContnet from "../components/PageContent";
import ContactBox from "../components/ContactBox";
import Info from "../data/ContactInfo/info";
import ContactForm from "../components/Forms/ContactForm";
import { useTranslation } from "react-i18next";

const PageContact = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header postion="contact" />
      <PageHeader
        title={t("Contact Enaya")}
        bgImg={ContactHeader}
        color="white"
      />
      <PageContnet
        subtitle={t("Contact us")}
        title={t("We alway here to helps you")}
        content={t("WantToGet") + "..."}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="row">
              {Info.map((infoItem) => (
                <ContactBox
                  key={infoItem.id}
                  title={infoItem.title}
                  icon={infoItem.icon}
                  content={infoItem.content}
                  link={infoItem.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageContnet
        subtitle={t("SEND US A MESSAGE")}
        title={t("Get in touch with us")}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageContact;
