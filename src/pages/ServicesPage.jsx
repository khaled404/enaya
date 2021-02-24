import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fold from "../components/Fold";
import Specialties from "../components/Specialties";
import MobileMenu from "../components/MobileMenu";
import SpecHead from "../components/Specialties/SpecHead";
import { GetServicesHandler } from "../store/actions/services";
import { useDispatch, useSelector } from "react-redux";
import ServicesList from "../components/Services/ServicesList";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetServicesHandler());
  }, []);
  const { services } = useSelector((state) => state.services);
  console.log(services, "services");
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <section className="specialties">
        <div className="container">
          <SpecHead
            title={t("Special Enaya Services")}
            text={t(
              "At Enaya we have more than 48390 Doctors in all specialties We want you to be sure that you are going to find the best doctors In easy and convenient way, Go ahead try Enaya today!"
            )}
          />
          <ul
            className="spec-list text-center"
            style={{ justifyContent: "center" }}
          >
            {services.map((item) => (
              <ServicesList
                key={item.id}
                Id={item.id}
                name={item.name}
                img={item.image}
              />
            ))}
            <ServicesList
              Id={"-1"}
              name={t("Clinics")}
              img={require("../assets/img/service/serv1.png")}
            />
            <ServicesList
              Id={"-2"}
              name={t("Hospitals")}
              img={require("../assets/img/service/serv2.png")}
            />
          </ul>

          {/* <Specialties pageTitle="ServicesPage" /> */}
        </div>
      </section>
      <Fold PageName="fold" />
      <Footer />
      <MobileMenu />
    </>
  );
};

export default ServicesPage;
