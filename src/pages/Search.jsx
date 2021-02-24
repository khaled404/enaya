import React, { Fragment, useState } from "react";
import DoctorList from "../components/DoctorList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { SearchHandler } from "../store/actions/search";
import searchImage from "../assets/img/icons/search-tool.png";

const Search = () => {
  const { searchData } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (search.length) {
      dispatch(SearchHandler(search));
    }
  };

  return (
    <Fragment>
      <Header />
      <section className="spec-detalis">
        <div className="container">
          <form
            id="form-search"
            onSubmit={onSubmitHandler}
            style={{ marginBottom: 20, marginTop: 20 }}
          >
            <input
              type="text"
              name="search"
              placeholder="Enter doctor name, category, specialist…"
              style={{ backgroundColor: "#f1efef" }}
              onChange={(e) => {
                const text = e.target.value;
                setSearch(text);
              }}
            />
            <img src={searchImage} alt="icon" />
            <button type="submit">Find doctor</button>
          </form>

          <div className="row">
            <div className="col-lg-9">
              {searchData.map((doctor) => (
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
                  type={doctor.type}
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
};

export default Search;
