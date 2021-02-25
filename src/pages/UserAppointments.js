import React, { Fragment, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileMenu from "../components/ProfileMenu";
import UserImg from "../assets/img/user.png";
import { Link } from "react-router-dom";
import UserAppointment from "../components/UserAppointment";
import UserApp from "../data/DoctorList/UserAppointment.json";
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { GetAvailabilitiesHandler } from "../store/actions/services";
import { useTranslation } from "react-i18next";
const UserAppointments = () => {
  const { availabilities } = useSelector((state) => state.services);
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(availabilities);
  const { t } = useTranslation();
  useEffect(() => {
    console.log(userData.id);
    dispatch(GetAvailabilitiesHandler(userData.id));
  }, []);
  return (
    <Fragment>
      <Header />
      <ProfileMenu />
      <section className="user-appointments">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {availabilities.map((appointment) => (
                <UserAppointment
                  key={appointment.id}
                  name={appointment.name}
                  date={appointment.date}
                  specialist={appointment.specialist}
                  price={appointment.price}
                  location={appointment.location}
                  time={appointment.time}
                  img={appointment.img}
                  status={appointment.status}
                  type={appointment.type}
                />
              ))}
            </div>
            <div className="col-md-4">
              <div className="media">
                <img
                  src={UserImg}
                  className="align-self-start mr-3"
                  alt="user-img"
                />
                <div className="media-body">
                  <p>{t("Welcome Back")}</p>
                  <h5 className="mt-0">{userData.name}</h5>
                  <Link to={`${process.env.PUBLIC_URL + "/profile"}`}>
                    {t("View your profile")}{" "}
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
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

export default UserAppointments;
