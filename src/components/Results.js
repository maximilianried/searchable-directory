import { useState, useEffect } from "react";
import React from "react";
import "../styles/Results.css";
import Card from "./Card";
import Data from "../data/data.json";

export default function Results() {
  const [autoSearch, setAutoSearch] = React.useState(
    localStorage.getItem("autoSearch") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("autoSearch", autoSearch);
  }, [autoSearch]);

  const [secondStart, setSecondStart] = React.useState(
    localStorage.getItem("secondStart") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("secondStart", secondStart);
  }, [secondStart]);

  const [pages, setPages] = useState([]);
  const [allPages, setAllPages] = useState([]);
  const searchBox = document.getElementById("search-box");
  const searchClearBtn = document.getElementById("search-clear-btn");

  useEffect(() => {
    setAllPages(Data.results);
    setPages(Data.results);

    if (secondStart === false) {
      setAutoSearch(!autoSearch);
      setSecondStart(!secondStart);
    }
  }, []);

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredPages = allPages.filter((page) =>
      `${page.name} ${page.details.use} ${page.details.keywords}`
        .toLowerCase()
        .includes(value)
    );
    setPages(filteredPages);
  };

  function resetInput() {
    searchBox.value = "";
    searchBox.focus();
    searchBox.select();
    setPages(allPages);
    searchClearBtn.hidden = "true";
  }

  function clearBtn() {
    if (searchBox.value === "") {
      searchClearBtn.hidden = "true";
    } else {
      searchClearBtn.hidden = "";
    }
  }

  return (
    <div>
      <h1 id="top-heading">Webverzeichnis</h1>
      <h4 id="sub-heading">Wichtige Seiten des Fachbereichs Informatik</h4>

      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search"/>
            <input
              type="text"
              className="form-control form-input"
              id="search-box"
              placeholder="Suchen"
              onInput={filterCards}
              onChange={clearBtn}
              autoFocus={autoSearch}
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
            />
            <span
              id="search-clear-btn"
              className="bi bi-x-circle-fill"
              onClick={resetInput}
              hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="row">
        {pages.map((page, index) => (
          <Card pageData={page} key={index} />
        ))}
      </div>
    </div>
  );
}
