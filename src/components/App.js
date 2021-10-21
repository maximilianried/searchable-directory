import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";

import Results from "./Results";
import Settings from "./Settings";
import Error from "./Error";

export default function App() {

  const [darkMode] = React.useState(
      localStorage.getItem("darkMode") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  React.useEffect(() => {
    if (darkMode === false) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, []);

  return (
      <div id="app-container">
        <div id="app-wrapper">
          <Router>
            <Switch>
              <Route exact path="/" component={Results} />
              <Route path="/settings" component={Settings} />
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
      </div>
  );
}
