import React, { Component } from "react";
import Logo from "./Logo";
import LoginHeader from "./Navbar/LoginHeader";
import Navbar from "./Navbar/Navbar";
import HeaderConfig from "./HeaderConfig";

class Header extends Component {
  // componentDidMount() {
  //     window.addEventListener('scroll', this.isSticky);
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.isSticky);
  // }

  // isSticky = (e)=>{
  //     const header = document.querySelector('header');
  //     const scrollTop = window.scrollY;
  //     scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
  // };

  render() {
    return (
      <header
        className={
          this.props.postion === "home"
            ? "header-area no-postion"
            : "header-area"
        }
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-5 col-lg-2">
              <Logo />
            </div>

            <div className="col-lg-7 d-none d-lg-block">
              <div className="navigation-area">
                <Navbar />
              </div>
            </div>

            <div className="col-7 col-lg-3 text-right">
              <HeaderConfig
                logRegContentShow={this.props.logRegContentShow}
                mobileMenuShow={this.props.mobileMenuShow}
              />
              <LoginHeader />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
