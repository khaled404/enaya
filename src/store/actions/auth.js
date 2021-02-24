import { axiosAPI, LocalKeys } from "../../helpers/config";
import { ShowTostHandler } from "../../helpers/helpers";
import ActionTypes from "./actions";
/**
 * @param {object} payload user data
 * @return {()=> void}
 */
const SaveUserData = (payload) => ({
  type: ActionTypes.SAVE_USER_DATA,
  payload: payload,
});

/**
 * @param {string} login_field emali or phone
 * @param {string} password any
 * @param {()=>void} cb
 * @return {()=> void}
 */
export const LoginHandler = (login_field, password, cb) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post("users/login", {
        login_field,
        password,
      });
      console.log("🚀 ~ file: auth.js ~ line 11 ~ return ~ data", data);
      localStorage.setItem(LocalKeys.TOKEN, data.data.token);
      dispatch(SaveUserData(data.data));
      ShowTostHandler(data.message, data.success ? "success" : "error");

      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js ~ line 13 ~ return ~ error",
        error.response
      );
      ShowTostHandler(
        error.response.data.message,
        error.response.data.success ? "success" : "error"
      );
    }
  };
};
/**
 * @param {string} name khaled
 * @param {string} email
 * @param {number} phone
 * @param {string} password
 * @param {string} password_confirmation
 * @param {string} gender
 * @param {()=>void} cb
 * @return {()=> void}
 */
export const RegisterHandler = (
  name,
  email,
  phone,
  password,
  password_confirmation,
  gender = "m",
  cb
) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post("users", {
        name,
        email,
        phone,
        password,
        password_confirmation,
        gender,
      });
      ShowTostHandler(data.message, "success");
      dispatch({
        type: ActionTypes.SAVE_USER_DATA_REGISTER,
        payload: data.data,
      });
      console.log("🚀 ~ file: auth.js ~ line 11 ~ return ~ data", data.data);
      cb && cb();
    } catch (error) {
      ShowTostHandler(error.response.data.message, "error");
      console.log(
        "🚀 ~ file: auth.js ~ line 13 ~ return ~ error",
        error.response
      );
    }
  };
};

/**
 * @param {string} login_field emali or phone
 * @param {string} password any
 * @param {number} verify_code
 */
export const VerifyCodeHandler = (login_field, password, verify_code, cb) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post("users/verify_code", {
        login_field,
        password,
        verify_code,
      });
      dispatch(SaveUserData(data.data));
      localStorage.setItem(LocalKeys.TOKEN, data.data.token);
      console.log("🚀 ~ file: auth.js ~ line 11 ~ return ~ data", data);
      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js ~ line 13 ~ return ~ error",
        error.response
      );
    }
  };
};

export const LogoutHandler = (cb) => {
  return async (dispatch) => {
    try {
      await axiosAPI.post("users/logout");
      localStorage.removeItem(LocalKeys.TOKEN);
      dispatch({ type: ActionTypes.LOGOUT });
      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js ~ line 13 ~ return ~ error",
        error.response
      );
      localStorage.removeItem(LocalKeys.TOKEN);
      dispatch({ type: ActionTypes.LOGOUT });
      cb && cb();
    }
  };
};
/**
 * @param {string} userId user id
 * @param {string} name user name
 * @param {string} phone user phone number
 * @param {string} gender user gender
 * @param {string} password user password
 * @param {string} password_confirmation user password confirmation
 */
export const UpdateUserHandler = (
  userId,
  name,
  phone,
  gender,
  password,
  password_confirmation
) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.put(`users/${userId}`, {
        name,
        phone,
        gender,
        password,
        password_confirmation,
      });
      console.log(
        "🚀 ~ file: auth.js ~ line 153 ~ return ~ data",
        data.data.message
      );
      ShowTostHandler(data.data.message, "success");
    } catch (error) {
      console.log("🚀 ~ file: auth.js ~ line 141 ~ return ~ error", error);
    }
  };
};
