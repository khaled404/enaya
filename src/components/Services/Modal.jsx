import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../UI/Input";
import {
  ConfirmProductHandler,
  GetProductHandler,
} from "../../store/actions/services";
import { useTranslation } from "react-i18next";
/**
 * @param {boolean} active
 * @param {()=>void} onClick
 * @param {string} reqType
 */

const Modal = ({ active, onClick, reqType, product_id }) => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    name: "",
    phone: "",
    notes: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      GetProductHandler(
        reqType,
        state.name,
        state.phone,
        state.notes,
        product_id,
        userData.id,
        onClick
      )
    );
  };
  const { t } = useTranslation();
  return (
    <>
      <div className={`overflo ${active && "active"}`} onClick={onClick}></div>
      <div className={`model-container ${active && "active"}`}>
        {reqType === "er_req" ? (
          <button
            className="costum-book"
            onClick={() => {
              dispatch(
                ConfirmProductHandler(reqType, userData, product_id, onClick)
              );
            }}
          >
            ER request
          </button>
        ) : (
          <form
            id="login-form"
            className="auth-form"
            onSubmit={onSubmitHandler}
          >
            <div className="single-input-item">
              <FormInput
                tag={"input"}
                type={"text"}
                name={"name"}
                placeholder={"Your Name"}
                onChange={(text) => {
                  setstate((old) => ({ ...old, name: text }));
                }}
              />
              <FormInput
                tag={"input"}
                type={"text"}
                name={"Phone"}
                placeholder={"Phone"}
                onChange={(text) => {
                  setstate((old) => ({ ...old, phone: text }));
                }}
              />
              <FormInput
                tag={"textarea"}
                type={"text"}
                name={"Notes"}
                placeholder={"Notes"}
                classes="textarea"
                onChange={(text) => {
                  setstate((old) => ({ ...old, notes: text }));
                }}
              />
              <button className="costum-book" type="submit">
                {t("Get")}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Modal;
