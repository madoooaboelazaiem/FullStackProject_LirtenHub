import React from 'react';
import App from './App'
import SignIn from './components/layout/SignIn'
import Form from './components/layout/Form'
import Header from './components/layout/HeaderHome'
import All_Locations from './components/All_Locations'
import All_Admins from './components/All_Admins'
import All_Candidates from './components/All_Candidates'
import All_ConsultancyAgencies from './components/All_ConsultancyAgencies'
import All_Projects from './components/All_Projects'
import Project_Requests from './components/Project_Requests'
import Single_Project from './components/pages/Single_Project'

import Calendar from './components/layout/Calendar'
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
import Profile from './components/pages/Profile'
//gowaha sign in w de hat7awelny 3ala app.js
// sign up w de hat7awelny 3ala form

class Home extends React.Component {
  render() {
    return (
      
      <div>
        <Header/>

      <Router>
      <Switch>
         <Route exact path="/SingleProject/:id" component={Single_Project}/>
          <Route exact path="/home" component={App}/>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/SignUp" component={Form}/>
          <Route exact path="/Locations" component={All_Locations}/>
          <Route exact path="/Admins" component={All_Admins}/>
          <Route exact path="/Candidates" component={All_Candidates}/>
          <Route exact path="/ConsultancyAgencies" component={All_ConsultancyAgencies}/>
          <Route exact path="/Projects" component={All_Projects}/>
          <Route exact path="/Project_Requests" component={Project_Requests}/>
          <Route exact path="/Calendar" component={Calendar}/>
          <Route exact path="/profile" component={Profile}/>
          </Switch>

      </Router>
      </div>

    )}
}

export default Home;
