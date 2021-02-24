import axios from "axios";
export const LocalKeys = {
  TOKEN: "TOKEN",
  LANG: "LANG",
};
export const axiosAPI = axios.create({
  baseURL: "https://enaya.agateiq.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": localStorage.getItem(LocalKeys.LANG) || "en",
    Authorization: `Bearer ${localStorage.getItem(LocalKeys.TOKEN)}`,
  },
});
