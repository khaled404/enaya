import React from "react";
import Thumbnail from "../../../assets/img/app-section.png";
import AppStore from "../../../assets/img/app-store-icon.png";
import GooglePlay from "../../../assets/img/google-play-icon.png";
import Content from "../../UI/Content";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-area-wrapper">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-6 col-lg-6">
            <div className="about-img">
              <img src={Thumbnail} alt="about-img" />
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <Content classes="about-content">
              <h2 className="hover-color">{t("The only app you’ll need")}</h2>
              <ul className="about-list">
                <li>
                  {" "}
                  <span className="about-text">
                    Cras convallis tellus et elit aliquet 20%
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="about-text">
                    Quisque commodo sem at velit sagittis elementum. Duis
                    feugiat facilisis nisl id bibendum. Sed in ornare purus
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="about-text">
                    Aliquam augue ante, venenatis a nunc a, maximus rhoncus
                    tellus. Nullam a tincidunt quam
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="about-text">
                    Morbi sodales risus quis orci hendrerit semper
                  </span>
                </li>
              </ul>
            </Content>
            <div className="app-images">
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
    </section>
  );
};

export default About;
