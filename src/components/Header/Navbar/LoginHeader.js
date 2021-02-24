import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LogoutHandler } from "../../../store/actions/auth";
const LoginHeader = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { t } = useTranslation();
  return (
    <ul className="header-action">
      {isLogin ? (
        <li>
          <Link
            onClick={() =>
              dispatch(
                LogoutHandler(() => {
                  push("/");
                })
              )
            }
            className="login"
          >
            {t("Log Out")}
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to={`${process.env.PUBLIC_URL + "/login"}`} className="login">
              {t("Log in")}
            </Link>
          </li>
          <li>
            <Link
              to={`${process.env.PUBLIC_URL + "/sign-up"}`}
              className="signup"
            >
              {t("Sign Up")}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default LoginHeader;
