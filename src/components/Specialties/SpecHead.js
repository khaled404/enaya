import React, { Fragment } from "react";

const SpecHead = ({ title, text }) => {
  return (
    <Fragment>
      <h2 className="text-center">{title}</h2>
      <p>{text}</p>
    </Fragment>
  );
};

export default SpecHead;
