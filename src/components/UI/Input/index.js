import React, { Fragment } from "react";

const FormInput = ({
  tag,
  type,
  name,
  placeholder,
  classes,
  val,
  label,
  labelText,
  ID,
  hasImg,
  onChange,
}) => {
  return (
    <div className="single-input-item">
      {(() => {
        if (tag === "input") {
          return (
            <Fragment>
              <input
                id={ID}
                type={type}
                name={name}
                placeholder={placeholder}
                className={classes}
                defaultValue={val}
                onChange={(e) => {
                  const val = e.target.value;
                  onChange && onChange(val);
                }}
              />
              {labelText ? (
                <label htmlFor={ID}>
                  {hasImg ? <img src={labelText} alt="label-img" /> : labelText}
                </label>
              ) : (
                ""
              )}
            </Fragment>
          );
        } else if (tag === "textarea") {
          return (
            <textarea
              name={name}
              cols="30"
              rows="7"
              placeholder={placeholder}
              className={classes}
              required
              onChange={(e) => {
                const val = e.target.value;
                onChange(val);
              }}
            />
          );
        } else if (tag === "button") {
          return <button className={`btn ${classes}`}>Send</button>;
        } else if (tag === "select") {
          return (
            <select
              onChange={(e) => {
                const val = e.target.value;
                onChange(val);
              }}
            >
              {label.map((gender, index) => (
                <option key={index} value={val[index]}>
                  {gender}
                </option>
              ))}
            </select>
          );
        }
      })()}
    </div>
  );
};

export default FormInput;
