import ActionTypes from "../actions/actions";

const initialState = {
  services: [],
  servicesDetails: [],
  productDetails: {},
  hospitalDetails: {},
  reviews: [],
  availabilities: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SAVE_SERVICES:
      return { ...state, services: payload };
    case ActionTypes.SAVE_SERVICES_DETAILS:
      return { ...state, servicesDetails: payload };
    case ActionTypes.SAVE_PRODUCT_DETALIS:
      return { ...state, productDetails: payload };
    case ActionTypes.SAVE_HOSPITAL_DETALIS:
      return { ...state, hospitalDetails: payload };
    case ActionTypes.SAVE_REVIEWS:
      return { ...state, reviews: payload };
    case ActionTypes.SAVE_AVAILABILITIES:
      return { ...state, availabilities: payload };
    default:
      return state;
  }
};
