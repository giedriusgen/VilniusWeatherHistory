import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";
import { HashRouter as Router, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HistoricalDataContainer from "./components/HistoricalData/HistoricalDataContainer";
import DataImportContainer from "./components/DataImport/DataImportContainer";
import CurrentWeatherContainer from "./components/CurrentWeather/CurrentWeatherContainer";

var AppContainer = props => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={CurrentWeatherContainer} />
          <Route
            path="/history"
            component={HistoricalDataContainer}
          />
          <Route
            path="/import"
            component={DataImportContainer}
          />
        </Switch>
      </AppContainer>
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
