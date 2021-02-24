import React from "react";
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Socials from "../../data/SocialMedia/social";
import Payment from "../../assets/img/payment.png";
import Roaya from "../../assets/img/roaya.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="widget-item">
                    <div className="about-widget">
                      <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                        <img src={Logo} alt="Logo" />
                      </Link>
                      <ul className="socialmedia">
                        {Socials.map((social) => (
                          <li key={social.id}>
                            <a href={social.url} target="_blank">
                              <i className={social.socialFont} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <Widget title={t("Meet Enaya")}>
                    <List classes="widget-list">
                      <LI>
                        <Link to={`${process.env.PUBLIC_URL + "/about-us"}`}>
                          {t("About Us")}
                        </Link>
                      </LI>
                      <LI>
                        <Link to={`${process.env.PUBLIC_URL + "/app-enaya"}`}>
                          {t("Mobile App")}
                        </Link>
                      </LI>
                      <LI>
                        <Link to={`${process.env.PUBLIC_URL + "/enaya-care"}`}>
                          {t("Enaya Care")}
                        </Link>
                      </LI>
                      <LI>
                        <Link to={`${process.env.PUBLIC_URL + "/contact"}`}>
                          {t("Contact us")}
                        </Link>
                      </LI>
                    </List>
                  </Widget>
                </div>
                <div className="col-md-4 col-6">
                  <Widget title={t("Need Help?")}>
                    <List classes="widget-list">
                      <LI>
                        <Link
                          to={`${process.env.PUBLIC_URL + "/terms-condtions"}`}
                        >
                          {t("Terms Of Use")}
                        </Link>
                      </LI>
                      <LI>
                        <Link to={`${process.env.PUBLIC_URL + "/privacy"}`}>
                          {t("Privacy Policy")}
                        </Link>
                      </LI>
                      <LI>
                        <Link
                          to={`${process.env.PUBLIC_URL + "/doctor-privacy"}`}
                        >
                          {t("Doctor Privacy Policy")}
                        </Link>
                      </LI>
                    </List>
                  </Widget>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-md-right text-center">
              <Widget>
                <ul className="footer-numbers">
                  <li className="text-center">
                    <a href="#" target="_blank">
                      <img src={Roaya} />
                    </a>
                  </li>
                  <li>{t("Owned by Roaya Group for managing Hospitals")}</li>
                </ul>
              </Widget>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-baseline">
            <div className="col-lg-6 col-md-7 text-left">
              <Text classes="copyright-txt">
                &copy; {new Date().getFullYear()}{" "}
                <span className="hover-color">{t("Enaya")}</span>.{" "}
                {t("All Rights Reserved.Made by")}{" "}
                <a
                  href="http://boldbrand.co"
                  target="_blank"
                  className="hover-color"
                >
                  BoldBrand
                </a>
              </Text>
            </div>
            <div className="col-lg-6 col-md-5 text-right">
              <img
                src={Payment}
                alt="Payment Method"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
