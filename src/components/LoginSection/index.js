import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SectionBg from "../../assets/img/login-section-bg.png";
const LoginSection = () => {
  const { t } = useTranslation();
  return (
    <section
      className="login-section text-center"
      style={{ backgroundImage: `url(${SectionBg})` }}
    >
      <div className="container">
        <h3>
          {t("Thousands of patients use Everyday to find the best doctors")}
        </h3>
        <div className="log-btn">
          <Link
            to={`${process.env.PUBLIC_URL + "/sign-up"}`}
            className="btn-outline"
          >
            {t("Join Enaya Today")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
