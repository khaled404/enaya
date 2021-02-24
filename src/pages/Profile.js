import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import ProfilBG from "../assets/img/user-profile.png";
import UserImg from "../assets/img/user.png";
import FormInput from "../components/UI/Input";
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserHandler } from "../store/actions/auth";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { userData } = useSelector((state) => state.auth);
  const [state, setstate] = useState({
    name: userData.name,
    phone: userData.phone,
    gender: userData.gender,
    password: "",
    password_confirmation: "",
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      UpdateUserHandler(
        userData.id,
        state.name,
        state.phone,
        state.gender,
        state.password,
        state.password_confirmation
      )
    );
  };

  return (
    <Fragment>
      <Header />
      <ProfileMenu />
      <section className="user-profile">
        <div
          className="user-bg"
          style={{ backgroundImage: `url(${ProfilBG})` }}
        >
          <div className="user-img text-center">
            <img
              src={userData.avatary}
              alt="User Name"
              width={150}
              height={150}
            />
            <h5>{userData.name}</h5>
          </div>
        </div>
        <div className="container">
          <form id="update-form" onSubmit={onSubmitHandler}>
            <FormInput
              tag={"input"}
              type={"text"}
              name={"name"}
              val={userData.name}
              onChange={(text) => {
                setstate((old) => ({ ...old, name: text }));
              }}
            />
            <FormInput
              tag={"input"}
              type={"text"}
              name={"phone"}
              val={userData.phone}
              onChange={(text) => {
                setstate((old) => ({ ...old, phone: text }));
              }}
            />
            <div className="cus-select">
              <FormInput
                tag={"select"}
                val={["male", "female"]}
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
              name={"password"}
              placeholder={t("Enter your password")}
              onChange={(text) => {
                setstate((old) => ({ ...old, password: text }));
              }}
            />
            <FormInput
              tag={"input"}
              type={"password"}
              name={"confirm_passwordame"}
              placeholder={t("Retype your password")}
              onChange={(text) => {
                setstate((old) => ({ ...old, password_confirmation: text }));
              }}
            />
            <FormInput
              tag={"input"}
              type={"submit"}
              name={"update"}
              val={"Update"}
            />
          </form>
        </div>
      </section>
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default Profile;
