import React, { Fragment, Component } from "react";
import DoctorList from "../components/DoctorList";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { LocalKeys } from "../helpers/config";

class SpecialtiesDetails extends Component {
  state = {
    doctors: [],
  };

  componentDidMount() {
    const SpecID = new URLSearchParams(window.location.search).get("id");

    axios
      .get(
        "https://enaya.agateiq.com/api/entities?filter[departments.id]=" +
          SpecID +
          "&filter[type]=clinic",
        {
          headers: {
            "Accept-Language": localStorage.getItem(LocalKeys.LANG) || "en",
          },
        }
      )
      .then((res) => {
        this.setState({
          doctors: res.data.data,
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <section className="spec-detalis">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {this.state.doctors.map((doctor) => (
                  <DoctorList
                    key={doctor.id}
                    Id={doctor.id}
                    name={doctor.name}
                    img={doctor.image}
                    specialist={doctor.departments}
                    location={doctor.address}
                    price={doctor.price}
                    workDays={doctor.wdays}
                    workHours={doctor.whours}
                    wating={doctor.waiting}
                    rate={doctor.patients}
                    rateValue={doctor.rate}
                  />
                ))}
              </div>
              <div className="col-lg-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default SpecialtiesDetails;
