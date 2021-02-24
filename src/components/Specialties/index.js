import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withTranslation } from "react-i18next";
import SpecHead from "./SpecHead";
import SpecialistsList from "./SpecialistsList";
import MoreIcon from "../../assets/img/specialties/more.png";
import { LocalKeys } from "../../helpers/config";

class Specialties extends Component {
  state = {
    departments: [],
  };

  componentDidMount() {
    axios
      .get("https://enaya.agateiq.com/api/departments", {
        headers: {
          "Accept-Language": localStorage.getItem(LocalKeys.LANG) || "en",
        },
      })
      .then((res) => {
        this.setState({
          departments: res.data.data,
        });
      });
  }

  render(props) {
    const { t } = this.props;

    return (
      <section className="specialties">
        <div className="container">
          <SpecHead
            title={t("Find what you are looking for")}
            text={t(
              "At Enaya we have more than 48390 Doctors in all specialties We want you to be sure that you are going to find the best doctors In easy and convenient way, Go ahead try Enaya today!"
            )}
          />
          <ul className="spec-list text-center">
            {this.props.pageTitle === "SpecialtiesPage"
              ? this.state.departments.map((department) => (
                  <SpecialistsList
                    key={department.id}
                    Id={department.id}
                    name={department.name}
                    img={department.image}
                  />
                ))
              : this.state.departments
                  .slice(0, 5)
                  .map((department) => (
                    <SpecialistsList
                      key={department.id}
                      Id={department.id}
                      name={department.name}
                      img={department.image}
                      pagename={this.props.pageTitle}
                    />
                  ))}
            {this.props.pageTitle === "HomePage" ? (
              <li>
                <Link to={`${process.env.PUBLIC_URL + "/specialties"}`}>
                  <img src={MoreIcon} alt="More" />
                  <span className="spec-name hover-color">{t("More")}...</span>
                </Link>
              </li>
            ) : (
              false
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Specialties);
