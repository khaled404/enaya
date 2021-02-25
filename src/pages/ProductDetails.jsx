import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider/home-one";
import DoctorBook from "../components/DoctorDetalis/DoctorBook";
import DoctorInfo from "../components/DoctorDetalis/DoctorInfo";
import DoctorRate from "../components/DoctorDetalis/DoctorRate";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { GetProductDetailsHandler } from "../store/actions/services";
import { useParams } from "react-router";
import ProductInfo from "../components/Services/ProductInfo";
import Modal from "../components/Services/Modal";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { productDetails } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    dispatch(GetProductDetailsHandler(id));
  }, []);
  const { t } = useTranslation();
  const toggleModeHandler = () => {
    setToggleModal((e) => !e);
    if (!toggleModal) {
      document.querySelector("body").classList.add("scroll");
    } else {
      document.querySelector("body").classList.remove("scroll");
    }
  };
  return (
    <>
      <Header />
      <section className="doctor-details">
        <div className="container">
          <Slider images={productDetails?.gallery_links} />
          <div className="row">
            <div className="col-lg-8">
              <ProductInfo
                name={productDetails?.name}
                img={productDetails?.image}
                price={productDetails?.price}
                specialist={productDetails?.departments}
                dayWork={productDetails?.wdays}
                hourWork={productDetails?.whours}
                rate={productDetails?.rate}
                dec={productDetails?.description}
                patients={productDetails?.patients}
              />
              <Modal
                active={toggleModal}
                onClick={toggleModeHandler}
                reqType={productDetails.req_type}
                product_id={id}
              />
              <div style={{ marginTop: 40 }}>
                <button className="costum-book" onClick={toggleModeHandler}>
                  {t("Book")}
                </button>
              </div>
              <DoctorRate id={productDetails.id} type="entity" />
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

export default ProductDetails;
