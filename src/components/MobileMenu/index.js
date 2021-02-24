import React from "react";
import OffCanvas from "../UI/OffCanvas";
import NavbarItem from "../Header/Navbar/NavbarItem";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutHandler } from "../../store/actions/auth";

const MobileMenu = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { push } = useHistory();
  return (
    <OffCanvas type="menu">
      <div className="res-mobile-menu">
        <div className="mobile-nav">
          <NavbarItem />
          <ul>
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
                  Log Out
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to={`${process.env.PUBLIC_URL + "/login"}`}
                    className="login"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${process.env.PUBLIC_URL + "/sign-up"}`}
                    className="signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </OffCanvas>
  );
};

export default MobileMenu;
