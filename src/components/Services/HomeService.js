import React from "react";
import { useTranslation } from "react-i18next";
import ServiceImg from "../../assets/img/serviceSection.png";

const HomeService = () => {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="service-contetn">
              <h3>{t("Special Enaya Services")}</h3>
              <p>
                {t(
                  "At Enaya we have more than 48390 Doctors in all specialties We want you to be sure that you are going to find the best doctors In easy and convenient way, Go ahead try Enaya today!"
                )}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-img">
              <img src={ServiceImg} alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
