import React from "react";
import "./App.css";
import All_Locations from "./components/All_Locations";
import All_Admins from "./components/All_Admins";
import All_Candidates from "./components/All_Candidates";
import All_ConsultancyAgencies from "./components/All_ConsultancyAgencies";
import All_Projects from "./components/All_Projects";
import Project_Requests from "./components/Project_Requests";
import Calendar from "./components/layout/Calendar";
import Header from "./components/layout/HeaderHome.js";
import Head from "./components/layout/Head";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "tachyons";

class App extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Head />
            <Router>
              <Route exact path="/Locations" component={All_Locations} />
              <Route exact path="/Admins" component={All_Admins} />
              <Route exact path="/Candidates" component={All_Candidates} />
              <Route
                exact
                path="/ConsultancyAgencies"
                component={All_ConsultancyAgencies}
              />
              <Route exact path="/Projects" component={All_Projects} />
              <Route
                exact
                path="/Project_Requests"
                component={Project_Requests}
              />
              <Route exact path="/Calendar" component={Calendar} />
            </Router>
          </Switch>
        </div>
    );
  }
}

export default App;