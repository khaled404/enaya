import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormInput from "../components/UI/Input";
import FormHeader from "../templates/Contact/FormHeader";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Header />
      <section className="login-page text-center">
        <div className="container">
          {/* <form id="login-form">
                        <FormInput
                                tag={'input'}
                                type={'text'}
                                name={'phone'}
                                placeholder={'Phone number'}
                            />
                        <FormInput
                                tag={'input'}
                                type={'password'}
                                name={'pass'}
                                placeholder={'Password'}
                            />
                        <div className="login-feats d-flex align-items-baseline justify-content-between">
                            <div className="remember d-flex align-items-baseline">
                            <FormInput
                                tag={'input'}
                                type={'radio'}
                                name={'pass'}
                                placeholder={'Password'}
                            /> <span>Remember me</span>
                            </div>
                            <div className="forget-link">
                                <Link to={`${process.env.PUBLIC_URL + "/forget-pass"}`}>Forgot password?</Link>
                            </div>
                        </div>
                        <FormInput
                                tag={'input'}
                                type={'submit'}
                                name={'submit'}
                                val={'login'} 
                            /> 
                    </form> */}
          <LoginForm />
          <div className="sign-up-link">
            Don't have an account?{" "}
            <Link to={`${process.env.PUBLIC_URL + "/sign-up"}`}>
              Sign up now!
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default Login;
