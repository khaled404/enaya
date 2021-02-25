import React from "react";
import { useTranslation } from "react-i18next";
import RateValue from "../../data/Rate/rate.json";

const DoctorInfo = ({
  name,
  img,
  price,
  specialist,
  dayWork,
  hourWork,
  rate,
  dec,
  patients,
}) => {
  // const RateImg = RateValue.find(item => (item.val === rate))
  const { t } = useTranslation();
  return (
    <div className="doctor-box">
      <div className="media">
        <img src={img} className="align-self-start mr-3" alt="doc-img" />
        <div className="media-body">
          <h5 className="doc-name">
            {t("Dr")}. {name}
          </h5>
          <div className="doc-spec">
            {price && (
              <p>
                {" "}
                {specialist?.map((spec) => spec.name)} .{" "}
                <span className="price">
                  {t("Fees")}: {price} {t("EGP")}
                </span>
              </p>
            )}
          </div>
          <div className="work-hours">
            {dayWork && (
              <p className="text">
                <span className="title">{t("Working hours")}:</span>{" "}
                {dayWork + " " + hourWork}
              </p>
            )}
            {RateValue.length && (
              <div className="rate">
                {RateValue.map((item) =>
                  item.val === rate ? (
                    <img
                      key={item.id}
                      src={require("../../assets/img/Rate/" + item.image)}
                      alt="rate"
                    />
                  ) : (
                    false
                  )
                )}
                {patients} {t("Reviews")}
              </div>
            )}
          </div>
        </div>
      </div>
      {dec && (
        <div className="description">
          <h5 className="title">{t("Description")}</h5>
          <p className="text"> {dec} </p>
        </div>
      )}
    </div>
  );
};

export default DoctorInfo;
