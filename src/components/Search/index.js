import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import searchImage from "../../assets/img/icons/search-tool.png";
import { SearchHandler } from "../../store/actions/search";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const { t } = useTranslation();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (search.length) {
      dispatch(
        SearchHandler(search, undefined, () => {
          console.log("/search");
          push("/search");
        })
      );
    }
  };

  return (
    <Fragment>
      <form id="form-search" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="search"
          placeholder={t("Enter doctor name, category, specialist…")}
          onChange={(e) => {
            const text = e.target.value;
            setSearch(text);
          }}
        />
        <img src={searchImage} alt="icon" />
        <button type="submit">{t("Find doctor")}</button>
      </form>
      <span className="search-text">
        {t("Search privately to 34,456 doctors in all specialists")}
      </span>
    </Fragment>
  );
};

export default Search;
