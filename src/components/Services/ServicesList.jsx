import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchHandler } from "../../store/actions/search";

const ServicesList = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <Link
          to={
            props.Id === "-1"
              ? `${process.env.PUBLIC_URL}/clinics`
              : props.Id === "-2"
              ? `${process.env.PUBLIC_URL}/hospitals`
              : `${process.env.PUBLIC_URL}/services-clinic/${props.Id}`
          }
          onClick={() => {
            if (props.Id === "-1") {
              dispatch(SearchHandler("", "clinic"));
            }
            if (props.Id === "-2") {
              dispatch(SearchHandler("", "hospital"));
            }
          }}
        >
          <img src={props.img} alt={props.name} />
          <span className="spec-name">{props.name}</span>
        </Link>
      </li>
    </>
  );
};

export default ServicesList;
