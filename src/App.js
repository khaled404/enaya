import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ All pages Import
 */
import Demo from "./pages/Demo";
import HomeOne from "./pages/HomeOne";
import Service from "./pages/Service";
// import ServiceDetails from "./pages/ServiceDetails";
// import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
// import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
// import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
// import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
// import BlogListRightSidebar from './pages/BlogListRightSidebar';
// import BlogDetailsPage from "./pages/BlogDetails";
// import Team from "./pages/Team";
// import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import AppEnaya from "./pages/AppEnaya";
import AboutUs from "./pages/AboutUs";
import EnayaCare from "./pages/EnayaCare";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import SpecialtiesDetails from "./pages/SpecialtiesDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import Profile from "./pages/Profile";
import UserAppointments from "./pages/UserAppointments";
import DoctorDetails from "./pages/DoctorDetails";
import Book from "./pages/Book";
import CompleteBook from "./pages/CompleteBook";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DoctorPrivacy from "./pages/DoctorPrivacy";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Search from "./pages/Search";
import ServicesPage from "./pages/ServicesPage";
import ServicesClinic from "./pages/ServicesClinic";
import ProductDetails from "./pages/ProductDetails";
import HospitalDetails from "./pages/HospitalDetails";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./localization/ar";
import en from "./localization/en";
import { LocalKeys } from "./helpers/config";

const App = () => {
  i18n.use(initReactI18next).init({
    resources: {
      ar: {
        translation: ar,
      },
      en: {
        translation: en,
      },
    },
    lng: localStorage.getItem(LocalKeys.LANG) === "ar" ? "ar" : "en",
    fallbackLng: localStorage.getItem(LocalKeys.LANG) === "ar" ? "ar" : "en",
    interpolation: {
      escapeValue: false,
    },
  });
  useEffect(() => {
    if (localStorage.getItem(LocalKeys.LANG) === "ar") {
      const html = document.querySelector("html");
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
    }
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/demo"}`}
            component={Demo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeOne}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/search"}`}
            component={Search}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/clinics"}`}
            component={Search}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/hospitals"}`}
            component={Search}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/services"}`}
            component={ServicesPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/services-clinic/:id"}`}
            component={ServicesClinic}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/productDetails/:id"}`}
            component={ProductDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/specialties/:specialtiesID"}`}
            component={SpecialtiesDetails}
          />
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`}
                           component={BlogGridRightSidebar}/> */}
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`}
                           component={BlogGridLeftSidebar}/> */}
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`}
                           component={BlogGridWithoutSidebar}/> */}
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`}
                           component={BlogListLeftSidebar}/> */}
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`}
                           component={BlogListRightSidebar}/> */}
          {/* <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage}/> */}
          {/* <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team}/> */}
          {/* <Route path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`} component={TeamDetails}/> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/app-enaya"}`}
            component={AppEnaya}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about-us"}`}
            component={AboutUs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/enaya-care"}`}
            component={EnayaCare}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/specialties"}`}
            component={SpecialtiesPage}
          />
          {/* <Route path={`${process.env.PUBLIC_URL + "/specialties/:SpecID"}`} component={SpecialtiesDetails}/> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/sign-up"}`}
            component={SignUp}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/forget-pass"}`}
            component={ForgetPass}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/profile"}`}
            component={Profile}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/user-appointments"}`}
            component={UserAppointments}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/doctor-details:docId"}`}
            component={DoctorDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/hospital-details/:id"}`}
            component={HospitalDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/book"}`}
            component={Book}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/complete-book"}`}
            component={CompleteBook}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/privacy"}`}
            component={Privacy}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/doctor-privacy"}`}
            component={DoctorPrivacy}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/terms-condtions"}`}
            component={Terms}
          />
          <Route exact component={Error404} />
        </Switch>
      </ScrollToTop>
      <ToastContainer />
    </Router>
  );
};

export default App;
