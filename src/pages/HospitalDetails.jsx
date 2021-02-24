import React, { Fragment, Component, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider/home-one";
import DoctorBook from "../components/DoctorDetalis/DoctorBook";
import DoctorInfo from "../components/DoctorDetalis/DoctorInfo";
import DoctorRate from "../components/DoctorDetalis/DoctorRate";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetHospitalDetailsHandler } from "../store/actions/services";
import { Link } from "react-router-dom";

const HospitalDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hospitalDetails } = useSelector((state) => state.services);
  console.log(
    "🚀 ~ file: HospitalDetails.jsx ~ line 19 ~ HospitalDetails ~ hospitalDetails",
    hospitalDetails
  );
  useEffect(() => {
    dispatch(GetHospitalDetailsHandler(id));
  }, []);

  function handelClick(e) {
    localStorage.setItem("DocName", hospitalDetails.name);
    localStorage.setItem("Docimg", hospitalDetails.image);
    localStorage.setItem("DocPrice", hospitalDetails.price);
  }

  return (
    <>
      <Header />
      <section className="doctor-details">
        <div className="container">
          <Slider images={hospitalDetails.gallery_links} />
          <div className="row">
            <div className="col-lg-8">
              <DoctorInfo
                name={hospitalDetails.name}
                img={hospitalDetails.image}
                price={hospitalDetails.price}
                specialist={hospitalDetails.departments}
                dayWork={hospitalDetails.wdays}
                hourWork={hospitalDetails.whours}
                rate={hospitalDetails.rate}
                dec={hospitalDetails.description}
                patients={hospitalDetails.patients}
              />
              <div className="HospitalsSections">
                <h3>Browse Hospitals sections</h3>
                {hospitalDetails?.departments?.map((item) => (
                  <div className="hospitals-box">
                    <div className="image-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="conetnt">
                      <h4>{item.name}</h4>
                      <h5>{item.slug}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={`${process.env.PUBLIC_URL + "/book"}`}
                onClick={handelClick}
                className="costum-book"
              >
                Book
              </Link>
              <DoctorRate id={hospitalDetails.id} type="entity" />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default HospitalDetails;
