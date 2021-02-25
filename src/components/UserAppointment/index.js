import React from "react";
import { Link } from "react-router-dom";

const UserAppointment = ({
  img,
  name,
  specialist,
  date,
  time,
  price,
  location,
  status,
  type,
}) => {
  return (
    <div className="doctor-list">
      <div className="doc-box">
        <div className="row align-items-center">
          {/* <div className="col-md-3">
                                <img src={require('../../assets/img/doctors/' + img)}  className="doc-img" alt={name}/>
                            </div> */}
          <div className="col-md-5 pl-0">
            <div className="doc-info">
              <h6 className="type">{type}</h6>
              <div className="title-box">
                <h5 className="doc-name">Dr. {name}</h5>
                <span className="price">
                  <i className="fa fa-money"></i> {price} EGP
                </span>
              </div>
              <p className="specialist">{specialist}</p>
              <p className="wating-hours">
                <i className="fa fa-calendar"></i> {date}{" "}
                <span className="time">
                  <i className="fa fa-clock-o"></i> {time}
                </span>
              </p>
              <p className="location">
                <i className="fa fa-map-marker"></i> {location}
              </p>
            </div>
          </div>
          <div className="col-md-4 borderLeftRight">
            <div className="doc-feat">
              <div className="book-btn text-center">
                <Link
                  to="/"
                  className={
                    status === "Cancel"
                      ? "cancel"
                      : status === "Canceled"
                      ? "disabled"
                      : "booked"
                  }
                >
                  {status}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppointment;
