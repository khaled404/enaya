import ActionTypes from "../actions/actions";

const initialState = {
  searchData: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SAVE_SEARCH:
      return { ...state, searchData: payload };

    default:
      return state;
  }
};
