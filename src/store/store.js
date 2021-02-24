import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "../helpers/helpers";
import auth from "./reducers/auth";
import search from "./reducers/search";
import services from "./reducers/services";
const authConfig = new PersistConfig("auth", "isLogin", "userData");
const searchConfig = new PersistConfig("search", "searchData");
const servicesConfig = new PersistConfig(
  "services",
  "servicesDetails",
  "productDetails"
);

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  search: persistReducer(searchConfig, search),
  services: persistReducer(servicesConfig, services),
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
