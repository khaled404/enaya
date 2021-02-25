import { axiosAPI } from "../../helpers/config";
import ActionTypes from "./actions";
import { ShowTostHandler } from "../../helpers/helpers";

export const GetServicesHandler = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get("services");
      console.log("🚀 ~ file: auth.js ~ line 11 ~ return ~ data", data);
      dispatch({ type: ActionTypes.SAVE_SERVICES, payload: data.data });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 10 ~ return ~ error",
        error.response
      );
    }
  };
};
/**
 * @param {number} id
 * @param {string} searchTerm
 */
export const GetServicesDetailsHandler = (id, searchTerm = "") => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(
        `/products?searchTerm=${searchTerm}&filter[service.id]=${id}`
      );
      console.log("🚀 ~ file: auth.js ~ line 11 ~ return ~ data", data);
      dispatch({
        type: ActionTypes.SAVE_SERVICES_DETAILS,
        payload: data.data,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 10 ~ return ~ error",
        error.response
      );
    }
  };
};

export const GetProductDetailsHandler = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(`products/${id}`);
      console.log("🚀 ~ file: services.js ~ line 46 ~ return ~ data", data);
      dispatch({
        type: ActionTypes.SAVE_PRODUCT_DETALIS,
        payload: data.data,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};

/**
 * @param {string} req_type
 * @param {string} user_id
 * @param {string} product_id
 * @param {()=>void} cb
 */

export const ConfirmProductHandler = (req_type, userData, product_id, cb) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post(`orders`, {
        req_type,
        user_id: userData.id,
        product_id,
        name: userData.name,
        phone: userData.phone || "",
      });
      console.log("🚀 ~ file: services.js ~ line 74 ~ return ~ data", data);
      ShowTostHandler(data.message, "success");

      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};

/**
 *
 * @param {string} req_type
 * @param {string} name
 * @param {string} phone
 * @param {string} notes
 * @param {string} product_id
 * @param {string} user_id
 * @param {()=>void} cb
 */
export const GetProductHandler = (
  req_type,
  name,
  phone,
  notes,
  product_id,
  user_id,
  cb
) => {
  return async (dispatch) => {
    try {
      console.log({
        req_type,
        name,
        phone,
        notes,
        product_id,
        user_id,
      });
      const { data } = await axiosAPI.post(`orders`, {
        req_type,
        name,
        phone,
        notes,
        product_id,
        user_id,
      });
      console.log("🚀 ~ file: services.js ~ line 74 ~ return ~ data", data);
      ShowTostHandler(data.message, "success");

      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};
/**
 * @param {number} id
 */
export const GetHospitalDetailsHandler = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(`entities/${id}`);
      console.log("🚀 ~ file: services.js ~ line 74 ~ return ~ data", data);
      dispatch({ type: ActionTypes.SAVE_HOSPITAL_DETALIS, payload: data.data });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};
/**
 * @param {string} type
 * @param {number} id
 */
export const GetReviewsHandler = (type, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(
        `reviews?filter[reviewable_type]=${type}&filter[reviewable_id]=${id}`
      );
      console.log("🚀 ~ file: services.js ~ line 74 ~ return ~ data", data);
      dispatch({ type: ActionTypes.SAVE_REVIEWS, payload: data.data });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};
/**
 * @param {string} id  user id
 */
export const GetAvailabilitiesHandler = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(`appointments/${id}`);
      console.log("🚀 ~ file: services.js ~ line 74 ~ return ~ data", data);
      dispatch({ type: ActionTypes.SAVE_AVAILABILITIES, payload: data.data });
    } catch (error) {
      console.log(
        "🚀 ~ file: services.js ~ line 52 ~ return ~ error",
        error.response
      );
    }
  };
};
