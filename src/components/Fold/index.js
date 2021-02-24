import React from "react";
import FoldBg from "../../assets/img/demo-page/slide.jpg";
import SerchBg from "../../assets/img/demo-page/fold.png";
import Search from "../Search";
import { useTranslation } from "react-i18next";

const Fold = (props) => {
  const { t } = useTranslation();
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${props.PageName === "home" ? FoldBg : SerchBg})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="hero-content-wrap">
              <div className="hero-content text-left">
                <h1>{t("Best Doctors In Egypt")}</h1>
                <p>
                  {t(
                    "Find the best doctors in Egypt, with easy search and Booking for you and for others in a simple way"
                  )}
                </p>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fold;
