import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";
import Flag from "../../../assets/img/icons/Flag_of_Egypt.png";
import { SwitchLanghandler } from "../../../helpers/helpers";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function NavbarItem(props) {
  const { isLogin } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  return (
    <Fragment>
      {navbarData.map((item) => {
        if (item.title === "Profile" && !isLogin) {
          return;
        }
        if (!item.img) {
          return (
            <li
              key={item.id}
              className={item.subMenu || item.megaMenu ? "has-submenu" : ""}
            >
              <Link to={`${process.env.PUBLIC_URL + item.link}`}>
                {t(item.title)}
              </Link>
            </li>
          );
        } else {
          return (
            <li
              key={item.id}
              className={item.subMenu || item.megaMenu ? "has-submenu" : ""}
              onClick={SwitchLanghandler}
            >
              <Link>
                <img className="flag" src={Flag} alt="lang" />
              </Link>
            </li>
          );
        }
      })}
      {/* {navbarData.map((item) => (
        <li
          key={item.id}
          className={item.subMenu || item.megaMenu ? "has-submenu" : ""}
        >
          <Link to={`${process.env.PUBLIC_URL + item.link}`}>
            {!item.img ? (
              item.title
            ) : (
              <img
                className="flag"
                src={Flag}
                alt="lang"
                onClick={SwitchLanghandler}
              />
            )}
          </Link>
        </li>
      ))} */}
    </Fragment>
  );
}

export default NavbarItem;
