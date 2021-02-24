import { axiosAPI } from "../../helpers/config";
import ActionTypes from "./actions";

/**
 * @param {string} searchTerm
 * @param {string} filter
 * @param {()=>void} cb
 * @returns {()=>void}
 */
export const SearchHandler = (searchTerm, filter, cb) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(
        `entities?searchTerm=${searchTerm}${
          filter ? `&filter[type]=${filter}` : ""
        }`
      );
      console.log("🚀 ~ file: search.js ~ line 13 ~ return ~ data", data);
      dispatch({ type: ActionTypes.SAVE_SEARCH, payload: data.data });

      cb && cb();
    } catch (error) {
      console.log(
        "🚀 ~ file: search.js ~ line 16 ~ return ~ error",
        error.response
      );
    }
  };
};
