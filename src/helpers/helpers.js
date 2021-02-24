import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";
import { LocalKeys } from "./config";

export class PersistConfig {
  constructor(key, ...whitelist) {
    this.key = key;
    this.storage = storage;
    this.whitelist = whitelist;
  }
}
/**
 * @param {string} notfiction
 * @param {string} type dark | default | error | info | success | warning
 */
export const ShowTostHandler = (notfiction, type) => {
  const isRTL = localStorage.getItem(LocalKeys.LANG) === "ar" || false;
  toast(notfiction, {
    position: "top-right",
    type: type,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    rtl: isRTL,
  });
};

export const SwitchLanghandler = () => {
  const html = document.querySelector("html");
  const lang = html.getAttribute("lang");
  if (lang === "en") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    localStorage.setItem(LocalKeys.LANG, "ar");
    window.location.reload();
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    localStorage.setItem(LocalKeys.LANG, "en");
    window.location.reload();
  }
};
