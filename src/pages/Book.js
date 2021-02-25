import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import BookHeader from "../assets/img/booking-bg.png";
import BookForm from "../components/Forms/BookForm";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";

const Book = () => {
  // console.log()
  const { t } = useTranslation();
  const name = localStorage.getItem("DocName");
  const img = localStorage.getItem("Docimg");
  const price = localStorage.getItem("DocPrice");
  const Spec = localStorage.getItem("Spec");

  return (
    <Fragment>
      <Header />
      <PageHeader
        title={t("Booking")}
        bgImg={BookHeader}
        content="Book an appointment for yourself Or for others"
        color="white"
      />
      <section className="book">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="book-form">
                <BookForm />
              </div>
            </div>
            <div className="col-lg-6 boxbook">
              <div className="doc-box">
                <div className="media">
                  <img src={img} className="align-self-start mr-3" alt={name} />
                  <div className="media-body">
                    <h5 className="name">
                      {t("Dr")}. {name}
                    </h5>
                    <div className="doc-spec">
                      {" "}
                      {Spec} .{" "}
                      <span className="price">
                        {t("Fees")}: {price} {t("EGP")}
                      </span>
                    </div>
                    <div className="book-info">
                      <h4 className="title">{t("Booking")}</h4>
                      <div className="book-detail">
                        <div className="date">
                          <h6 className="title">{t("Dates")}</h6>
                          <p className="text">25 / 9 / 2020</p>
                        </div>
                        <div className="time">
                          <h6 className="title">Time</h6>
                          <p className="text">8:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Book;
