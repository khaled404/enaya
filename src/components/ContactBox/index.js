import React from "react";
import { useTranslation } from "react-i18next";

const ContactBox = (props) => {
  const { t } = useTranslation();
  return (
    <div className="col-lg-4 col-md-6">
      <div className="contact-info">
        <div className="row">
          <div className="col-3">
            <img
              src={require("../../assets/img/icons/" + props.icon)}
              alt={props.title}
            />
          </div>
          <div className="col-9">
            <h5 className="info-title">{t(props.title)}</h5>
            <ul className="info-title">
              {props.content.map((index, item) => (
                <li key={item}>{index}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
