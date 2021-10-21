import React from "react";
import "../styles/Card.css";

export default function Card({ pageData }) {

  const [newTab] = React.useState(
    localStorage.getItem("newTab") === "true"
  );

  const renderLink = () => {
    if (newTab === true) {
      return (
        <a
          href={pageData.details.link}
          className="stretched-link"
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    } else {
      return <a href={pageData.details.link} className="stretched-link"/>;
    }
  };

  return (
    <div className="col-md-4" id="result-grid">
      <div className="card h-100" id="result-card">
        <div className="card-body" id="result-body">
          <div id="result-icon">
            <i className={pageData.details.icon}/>
          </div>
          <h5 className="card-title" id="result-title">
            {pageData.name}
          </h5>
          <p className="card-text">{pageData.details.use}</p>
          {renderLink()}
        </div>
      </div>
    </div>
  );
}
