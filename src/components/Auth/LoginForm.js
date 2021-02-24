import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import FormHeader from "../../templates/Contact/FormHeader";
import FormInput from "../UI/Input";
import { LoginHandler } from "../../store/actions/auth";
import { useTranslation } from "react-i18next";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { t } = useTranslation();
  const [state, setstate] = useState({
    phone: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      LoginHandler(state.phone, state.password, () => {
        push("/");
      })
    );
  };

  return (
    <Fragment>
      <FormHeader title="Sign In" text="Sign in now to Access Your Account" />
      <form id="login-form" className="auth-form" onSubmit={onSubmitHandler}>
        <div className="single-input-item">
          <div className="row">
            <input
              type="phone"
              name="name"
              placeholder={t("Phone number")}
              required
              onChange={(e) => {
                const text = e.target.value;
                setstate((old) => ({ ...old, phone: text }));
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => {
                const text = e.target.value;
                setstate((old) => ({ ...old, password: text }));
              }}
            />

            {/* <div className="login-feats ">
              <div className="remember d-flex align-items-baseline">
                <input type="radio" /> <span>Remember</span>
              </div>
              <div className="forget-link">
                <Link to={`${process.env.PUBLIC_URL + "/forget-pass"}`}>
                  Forgot password?
                </Link>
              </div>
            </div> */}
          </div>
          <FormInput
            tag={"input"}
            type={"submit"}
            name={"rad"}
            val={"Sign Up"}
          />
        </div>
      </form>
      <div className="login-feats ">
        <div className="forget-link" style={{ marginBottom: 15 }}>
          <Link to={`${process.env.PUBLIC_URL + "/forget-pass"}`}>
            Forgot password?
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
