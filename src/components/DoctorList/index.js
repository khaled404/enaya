import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RateVal from "../../data/Rate/rate.json";

const DoctorList = ({
  Id,
  name,
  specialist,
  location,
  price,
  workDays,
  workHours,
  wating,
  rate,
  img,
  rateValue,
  isService,
  type,
}) => {
  const RateImg = RateVal.find((item) => item.val === rateValue);
  const { t } = useTranslation();
  const url = isService
    ? `${process.env.PUBLIC_URL}/productDetails/${Id}`
    : type === "hospital"
    ? `${process.env.PUBLIC_URL}/hospital-details/${Id}`
    : `${process.env.PUBLIC_URL}/doctor-details:?id=${Id}`;
  return (
    <section className="doctor-list">
      {
        <div className="doc-box">
          <div className="row ">
            <div className="col-md-3 col-4">
              <img src={img} className="doc-img" alt={name} />
            </div>
            <div className="col-md-5 pl-0 col-8">
              <div className="doc-info">
                <h5 className="doc-name">Dr. {name}</h5>
                {specialist?.map((spec) => (
                  <span key={spec.id} className="specialist">
                    {" "}
                    {spec.name ? spec.name + " | " : spec.name}{" "}
                  </span>
                ))}
                {RateImg?.image && (
                  <div className="rate-box">
                    <img
                      src={require("../../assets/img/Rate/" + RateImg?.image)}
                      className="doc-rate"
                      alt="rate"
                    />{" "}
                    <span className="rate-num">{rate} Feedback</span>
                  </div>
                )}
                {workDays && (
                  <p className="wating-hours">
                    <i className="fa fa-calendar"></i>{" "}
                    {workDays + " " + workHours}
                  </p>
                )}
              </div>
            </div>
            <div
              className="col-md-4 col-12"
              style={{ borderLeft: "1px solid #EEE" }}
            >
              <div className="doc-feat">
                <ul>
                  {location && (
                    <li>
                      <i className="fa fa-map-marker"></i> {location}
                    </li>
                  )}
                  {price && (
                    <li>
                      <i className="fa fa-money"></i> {price} EGP
                    </li>
                  )}
                  {wating && (
                    <li>
                      <i className="fa fa-clock-o"></i> {wating} Min
                    </li>
                  )}
                </ul>
                <div className="book-btn text-center">
                  <Link to={url}>{t("Book")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default DoctorList;
