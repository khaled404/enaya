import React from "react";
import { useTranslation } from "react-i18next";
import RateValue from "../../data/Rate/rate.json";

const ProductInfo = ({
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
        <img
          src={img}
          className="align-self-start mr-3"
          alt="doc-img"
          style={{ maxHeight: 200, maxWidth: 200 }}
        />
        <div className="media-body">
          <h5 className="doc-name">{name}</h5>
          <div className="doc-spec">
            <p>
              {" "}
              {specialist?.map((spec) => spec.name)} .{" "}
              <span className="price">
                {t("Fees")}: {price} {t("EGP")}
              </span>
            </p>
          </div>
          <div className="work-hours">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
