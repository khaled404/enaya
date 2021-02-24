import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-menu">
      <div className="container-fluid">
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL + "/profile"}`}>
              {t("My Profile")}
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL + "/user-appointments"}`}>
              {t("My Doctors")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
