import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <form id="contactForm">
        <div className="single-input-item">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                name="name"
                placeholder={t("Enter Your Name *")}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="phone"
                name="phone"
                placeholder={t("Enter Your Phone *")}
                required
              />
            </div>
            <div className="col-md-4">
              <input type="text" name="subject" placeholder={t("Subject")} />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                cols="30"
                rows="7"
                placeholder={t("Your Meassge Here *")}
                required
              ></textarea>
            </div>
            <div className="col-12">
              <input
                type="submit"
                name="submit"
                value={t("Send")}
                className="con-submit"
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
