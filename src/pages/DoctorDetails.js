import React, { Fragment, Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider/home-one";
import DoctorBook from "../components/DoctorDetalis/DoctorBook";
import DoctorInfo from "../components/DoctorDetalis/DoctorInfo";
import DoctorRate from "../components/DoctorDetalis/DoctorRate";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { LocalKeys } from "../helpers/config";

class DoctorDetails extends Component {
  state = {
    doctor: {
      id: 1,
      name: "",
      slug: "",
      image: "",
      type: "",
      registrar: "",
      user_id: 1,
      phone: "",
      email: "",
      address: "",
      city: "",
      description: "",
      wdays: "",
      whours: "",
      patients: 1,
      rate: "",
      waiting: "",
      price: "",
      departments: [],
      gallery_links: [],
    },
  };

  componentDidMount() {
    const DocID = new URLSearchParams(window.location.search).get("id");
    axios
      .get("https://enaya.agateiq.com/api/entities/" + DocID, {
        "Accept-Language": localStorage.getItem(LocalKeys.LANG) || "en",
      })
      .then((res) => {
        const doctor = res.data.data;
        this.setState({
          doctor: {
            id: 1,
            name: doctor.name,
            slug: doctor.slug,
            image: doctor.image,
            type: doctor.type,
            registrar: doctor.registrar,
            user_id: doctor.user_id,
            phone: doctor.phone,
            email: doctor.email,
            address: doctor.address,
            city: doctor.city,
            description: doctor.description,
            wdays: doctor.wdays,
            whours: doctor.whours,
            patients: doctor.patients,
            rate: doctor.rate,
            waiting: doctor.waiting,
            price: doctor.price,
            departments: doctor.departments,
            gallery_links: doctor.gallery_links,
          },
        });
      });
  }

  render() {
    const { doctor } = this.state;

    return (
      <Fragment>
        <Header />
        <section className="doctor-details">
          <div className="container">
            <Slider images={doctor.gallery_links} />
            <div className="row">
              <div className="col-lg-8">
                <DoctorInfo
                  name={doctor.name}
                  img={doctor.image}
                  price={doctor.price}
                  specialist={doctor.departments}
                  dayWork={doctor.wdays}
                  hourWork={doctor.whours}
                  rate={doctor.rate}
                  dec={doctor.description}
                  patients={doctor.patients}
                />
                <DoctorBook
                  name={doctor.name}
                  img={doctor.image}
                  price={doctor.price}
                  specialist={doctor.departments}
                />
                <DoctorRate />
              </div>
              <div className="col-lg-4">
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

export default DoctorDetails;
