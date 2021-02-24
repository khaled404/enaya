import ActionTypes from "../actions/actions";

const initialState = {
  userData: {},
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_DATA:
      return { ...state, userData: action.payload, isLogin: true };
    case ActionTypes.SAVE_USER_DATA_REGISTER:
      return { ...state, userData: action.payload };
    case ActionTypes.LOGOUT:
      return { ...state, userData: {}, isLogin: false };
    default:
      return state;
  }
};
