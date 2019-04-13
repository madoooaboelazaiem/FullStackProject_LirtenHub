import React from 'react';
import './App.css';
import All_Locations from './components/All_Locations'
import AddLocation from './components/AddLocation'
import All_Projects from './components/All_Projects'
import Project_Requests from './components/Project_Requests'
import Calendar from './components/layout/Calendar'
import Header from './components/layout/HeaderHome.js'
import Head from './components/layout/Head'
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom'
import 'tachyons'

class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Head/>
      <Router>
      <Route exact path="/AddLocations" component={AddLocation}/>
          <Route exact path="/Locations" component={All_Locations}/>
          <Route exact path="/Projects" component={All_Projects}/>
          <Route exact path="/Project_Requests" component={Project_Requests}/>
          <Route exact path="/Calendar" component={Calendar}/>
      </Router>
      </Switch>
          </div>
    )}
}

export default App;
