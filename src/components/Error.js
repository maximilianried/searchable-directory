import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export default function Error404() {
  return (
    <div>
      <Link class="back" to="/">
        <h2>
          <i
            className="bi bi-arrow-left-short"
            style={{ float: "left", color: "black" }}
          />
        </h2>
      </Link>
      <h2 id="error-heading">Seite nicht gefunden</h2>

      <div id="error-card" className="card">
        <div className="card-body">
          Prüfe die Webadresse auf Fehler.
          <br />
          Möglicherweise ist der Link zu der Seite veraltet.
        </div>
      </div>
    </div>
  );
}
