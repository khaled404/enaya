import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetReviewsHandler } from "../../store/actions/services";

const DoctorRate = ({ type, id }) => {
  const { reviews } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    if (type && id) {
      dispatch(GetReviewsHandler(type, id));
    }
  }, [type, id]);
  return (
    <div className="doctor-rate">
      {!!reviews.length && (
        <>
          <h3 className="title">Review</h3>
          {reviews.map((item) => (
            <div className="media" key={item.id}>
              <div className="media-body">
                <div className="name-box">
                  <h5 className="name">{item.user_id}</h5>
                </div>
                <p className="rate-date"> {item.created_date} </p>
                <p className="comment"> {item.description} </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DoctorRate;
