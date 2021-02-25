import React, { Fragment, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignUpImg from "../assets/img/sign-up.png";
import { Link, useHistory } from "react-router-dom";
import FormHeader from "../templates/Contact/FormHeader";
import FormInput from "../components/UI/Input";
import MobileMenu from "../components/MobileMenu";
import { useDispatch } from "react-redux";
import { RegisterHandler, VerifyCodeHandler } from "../store/actions/auth";
import VerificationInput from "react-verification-input";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { t } = useTranslation();
  const [state, setstate] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    gender: "",
    showCode: false,
    codeInput: null,
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      RegisterHandler(
        state.name,
        state.email,
        state.phone,
        state.password,
        state.password_confirmation,
        state.gender,
        () => {
          setstate((old) => ({ ...old, showCode: true }));
        }
      )
    );
  };
  useEffect(() => {
    const verificationInput = document.querySelector(".verification-input");
    setstate((old) => ({ ...old, codeInput: verificationInput }));
  }, []);
  const onVerificationHandler = (e) => {
    e.preventDefault();
    console.log(state.codeInput?.value);
    if (state.codeInput?.value?.length > 3) {
      dispatch(
        VerifyCodeHandler(
          state.email,
          state.password,
          state.codeInput.value,
          () => {
            push("/");
          }
        )
      );
    }
  };

  return (
    <Fragment>
      <Header />
      <section className="sign-up-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 cus-rs">
              <img src={SignUpImg} alt="sign-up-img" />
              <div className="login-link text-center">
                {t("Already User?")}{" "}
                <Link to={`${process.env.PUBLIC_URL + "/login"}`}>
                  {t("Sign in now!")}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <form
                onSubmit={onVerificationHandler}
                style={{
                  opacity: state.showCode ? 1 : 0,
                  visibility: state.showCode ? "visible" : "hidden",
                  position: !state.showCode ? "absolute" : "relative",
                }}
              >
                <FormHeader title={t("Enter Validation Code.")} />
                <VerificationInput
                  length={4}
                  placeholder="0"
                  autoFocus={true}
                  removeDefaultStyles
                  // debug
                  character={{
                    className: "character",
                  }}
                  getInputRef={(e) => console.log(e)}
                />
                <FormInput
                  tag={"input"}
                  type={"submit"}
                  name={"rad"}
                  val={"Send"}
                />
              </form>
              <div
                style={{
                  opacity: !state.showCode ? 1 : 0,
                  visibility: !state.showCode ? "visible" : "hidden",
                  position: state.showCode ? "absolute" : "relative",
                }}
              >
                <FormHeader
                  title={t("Sign up for free") + "."}
                  text={t("Join Thousands of users That Use Enaya Every Day !")}
                />
                <form id="sign-up-form" onSubmit={onSubmitHandler}>
                  <FormInput
                    tag={"input"}
                    type={"text"}
                    name={"name"}
                    placeholder={t("Your Name")}
                    onChange={(text) => {
                      setstate((old) => ({ ...old, name: text }));
                    }}
                  />
                  <FormInput
                    tag={"input"}
                    type={"text"}
                    name={"phone"}
                    placeholder={t("Phone Number")}
                    onChange={(text) => {
                      setstate((old) => ({ ...old, phone: text }));
                    }}
                  />
                  <FormInput
                    tag={"input"}
                    type={"email"}
                    name={"phone"}
                    placeholder={t("Email")}
                    onChange={(text) => {
                      setstate((old) => ({ ...old, email: text }));
                    }}
                  />
                  <div className="cus-select">
                    <FormInput
                      tag={"select"}
                      val={["m", "f"]}
                      label={[t("Male"), t("Female")]}
                      onChange={(text) => {
                        setstate((old) => ({ ...old, gender: text }));
                      }}
                    />
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <FormInput
                    tag={"input"}
                    type={"password"}
                    name={"phone"}
                    placeholder={t("Enter Your Password")}
                    onChange={(text) => {
                      setstate((old) => ({ ...old, password: text }));
                    }}
                  />
                  <FormInput
                    tag={"input"}
                    type={"password"}
                    name={"phone"}
                    placeholder={t("Retype Your Password")}
                    onChange={(text) => {
                      setstate((old) => ({
                        ...old,
                        password_confirmation: text,
                      }));
                    }}
                  />
                  <div className="remember d-flex align-items-baseline">
                    <FormInput tag={"input"} type={"radio"} name={"rad"} />
                    <span>
                      {t("I have read & Accept Athena")}{" "}
                      <Link to="/" className="hover-color">
                        {t("Privacy Policy")}
                      </Link>{" "}
                      {t("and")}{" "}
                      <Link to="/" className="hover-color">
                        {t("Terms of Use")}
                      </Link>
                    </span>
                  </div>
                  <FormInput
                    tag={"input"}
                    type={t("submit")}
                    name={"rad"}
                    val={"Sign Up"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default SignUp;
