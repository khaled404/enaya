import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageContnet from "../components/PageContent";
// import ContactBox from '../components/ContactBox'
import Footer from "../components/Footer";
import AppHeader from "../assets/img/pageHeader/app_header.png";
import AppStore from "../assets/img/app-store-icon.png";
import GooglePlay from "../assets/img/google-play-icon.png";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";
const AppEnaya = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header postion="contact" />
      <PageHeader
        title={t("The only app you’ll need")}
        bgImg={AppHeader}
        content="Duis lacus urna, condimentum a vehicula a, hendreritac nisi Lorem ipsum dolor sit amet, "
        color="white"
      />
      <PageContnet
        subtitle={t("Enaya")}
        title={t("Mobile app title")}
        content="Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, 
                                                                            consectetur adipiscing elit. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, 
                                                                            consectetur adipiscing elit. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, 
                                                                            consectetur adipiscing elit. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, 
                                                                            consectetur adipiscing elit. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, 
                                                                            consectetur adipiscing elit. "
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div
              className="app-images"
              style={{ marginLeft: 0, paddingBottom: "80px" }}
            >
              <Link to="#">
                <img src={AppStore} alt="AppStore" />
              </Link>
              <Link to="#">
                <img src={GooglePlay} alt="GooglePlay" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default AppEnaya;
