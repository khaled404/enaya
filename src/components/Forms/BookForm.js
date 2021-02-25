import React, { Component } from "react";
import Cib from "../../assets/img/cib.png";
import Fawry from "../../assets/img/fawry.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

class BookForm extends Component {
  state = {
    isChecked: false,
  };

  handelChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { t } = this.props;
    return (
      <form id="bookForm">
        <div className="single-input">
          <input
            type="text"
            className="test"
            name="name"
            placeholder={t("Patient Name")}
          />
          <input
            type="phone"
            className="test"
            name="phone"
            placeholder={t("Phone Number")}
          />
          <input
            type="email"
            className="test"
            name="mail"
            placeholder={t("Email")}
          />
          {/* <label htmlFor="other" className="checklabel">Book for other</label> */}
          {/* <input type="checkbox" id="other" onChange={this.handelChecked} /> */}
          <div className="payment">
            <div className="payment-method">
              <h5>Payment</h5>
              <div className="row">
                <div className="col-4 cus">
                  <input
                    type="radio"
                    id="cash"
                    className="cus-radio"
                    name="payment"
                    value=""
                  />
                  <label htmlFor="cash">{t("Cash")}</label>
                </div>
                <div className="col-4 cus">
                  <input
                    type="radio"
                    id="cib"
                    className="cus-radio"
                    name="payment"
                    value=""
                  />
                  <label htmlFor="cib">
                    <img src={Cib} className="payment-img" alt="cib" />
                  </label>
                </div>
                <div className="col-4 cus">
                  <input
                    type="radio"
                    id="fawry"
                    className="cus-radio"
                    name="payment"
                    value=""
                  />
                  <label htmlFor="fawry">
                    <img src={Fawry} className="payment-img" alt="cib" />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input type="text" name="card-num" placeholder="Card Number" />
              </div>
              <div className="col-8">
                <input type="text" name="card-num" placeholder="MM/YY" />
              </div>
              <div className="col-4">
                <input type="text" name="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>
          {/* <input type="submit" name="book" value="book" className="con-submit" /> */}
          <Link
            to={`${process.env.PUBLIC_URL + "/complete-book"}`}
            className="costum-book"
          >
            {t("Book")}
          </Link>
        </div>
      </form>
    );
  }
}

export default withTranslation()(BookForm);
