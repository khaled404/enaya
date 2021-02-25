import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import FormInput from "../UI/Input";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DoctorBook = ({ name, img, price, specialist }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  function handelClick(e) {
    localStorage.setItem("DocName", name);
    localStorage.setItem("Docimg", img);
    localStorage.setItem("DocPrice", price);
    specialist.map((item) => localStorage.setItem("Spec", item.name));
  }

  return (
    <div className="booking-section">
      <h5 className="title">{t("Booking")} </h5>
      <div className="row equal">
        <div className="col-md-3">
          <h6 className="tab-title">{t("Available Dates")}</h6>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                25 / 9 / 2020
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                25 / 9 / 2020
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                25 / 9 / 2020
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle("4");
                }}
              >
                25 / 9 / 2020
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div className="col-md-9">
          <h6 className="tab-title">Time</h6>
          <form>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" className="pane-box">
                    <FormInput
                      tag={"input"}
                      ID={"test1"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test2"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test3"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test4"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test5"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test6"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12" className="pane-box">
                    <FormInput
                      tag={"input"}
                      ID={"test1"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test2"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test3"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test4"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test5"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test6"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12" className="pane-box">
                    <FormInput
                      tag={"input"}
                      ID={"test1"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test2"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test3"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                    <FormInput
                      tag={"input"}
                      ID={"test4"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12" className="pane-box">
                    <FormInput
                      tag={"input"}
                      ID={"test1"}
                      type={"radio"}
                      name={"date"}
                      labelText={"12:00 PM"}
                    />
                  </Col>
                </Row>
              </TabPane>
              <Link
                to={`${process.env.PUBLIC_URL + "/book"}`}
                onClick={handelClick}
                className="costum-book"
              >
                {t("Book")}
              </Link>
            </TabContent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorBook;
