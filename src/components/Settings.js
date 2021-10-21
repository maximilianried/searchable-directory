import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import memoji from "../pictures/memoji.jpg";
import "../styles/Settings.css";

export default function Settings() {
  useEffect(() => {
    if (secondStart === false) {
      setAutoSearch(!autoSearch);
      setSecondStart(!secondStart);
    }
  }, []);

  const [secondStart, setSecondStart] = React.useState(
    localStorage.getItem("secondStart") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("secondStart", secondStart);
  }, [secondStart]);

  const [darkMode, setDarkmode] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const [newTab, setNewTab] = React.useState(
    localStorage.getItem("newTab") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("newTab", newTab);
  }, [newTab]);

  const [autoSearch, setAutoSearch] = React.useState(
    localStorage.getItem("autoSearch") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("autoSearch", autoSearch);
  }, [autoSearch]);

  return (
    <div>
      <Link class="back" to="/">
        <h2>
          <i className="bi bi-arrow-left-short" id="back-arrow"/>
        </h2>
      </Link>
      <h2 id="heading-center">Einstellungen</h2>

      <div className="card" id="settings-card">
        <div className="card-body">
          <div id="container">
            <div className="row">
              <div className="col">
                <div id="icon-container">
                  <i className="bi bi-moon-fill" id="icon"/>
                </div>
                <div id="settings-text">Dark Mode</div>
                <div id="switch-container">
                  <div className="form-check form-switch">
                    <input
                      id="switch"
                      className="form-check-input"
                      type="checkbox"
                      checked={darkMode}
                      onClick={() => {
                        setDarkmode(!darkMode);
                        window.location.reload();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr id="divider"/>
            <div className="row">
              <div className="col">
                <div id="icon-container">
                  <i className="bi bi-plus-square-fill" id="icon"/>
                </div>
                <div id="settings-text">Neuer Tab</div>
                <div id="switch-container">
                  <div className="form-check form-switch">
                    <input
                      id="switch"
                      className="form-check-input"
                      type="checkbox"
                      checked={newTab}
                      onClick={() => {
                        setNewTab(!newTab);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr id="divider"/>
            <div className="row">
              <div className="col">
                <div id="icon-container">
                  <i className="bi bi-lightning-fill" id="icon"/>
                </div>
                <div id="settings-text">Schnellsuche</div>
                <div id="switch-container">
                  <div className="form-check form-switch">
                    <input
                      id="switch"
                      className="form-check-input"
                      type="checkbox"
                      checked={autoSearch}
                      onClick={() => {
                        setAutoSearch(!autoSearch);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="small-card-title">Datenschutz</div>
      <div className="card" id="settings-card">
        <div className="card-body">
          Bei der Verwendung der App werden lokal Speicherwerte gesetzt um die
          Einstellungen zu speichern. <br />
          Es werden keine Cookies oder Tracker eingesetzt.
        </div>
      </div>

      <div id="small-card-title">Entwickler</div>
      <div className="card" id="settings-card">
        <div className="card-body">
          <img src={memoji} id="memoji" alt="Memoji" />
          <div>
            <div id="dev-text">
              <div id="dev-text-name">Maximilian Ried</div>
              Entwickelt in Bonn
            </div>
          </div>
        </div>
      </div>
      <div id="version">Softwareversion 2.3</div>
    </div>
  );
}
