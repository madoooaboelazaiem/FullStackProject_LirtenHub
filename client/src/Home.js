import React from 'react';
import App from './App'
import SignIn from './components/layout/SignIn'
import Form from './components/layout/Form'
import AddLocation from './components/AddLocation'
import EditLocation from './components/EditLocation'
import Header from './components/layout/HeaderHome'
import All_Locations from './components/All_Locations'
import AddRoom from './components/AddRoom'
import LocationRoom from './components/LocationRooms'
import EditRoom from './components/EditRoom'
import Rooms from './components/Rooms'
import All_Projects from './components/All_Projects'
import Reservations from './components/pages/Reservations'
import Project_Requests from './components/Project_Requests'
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
          <Route exact path="/home" component={App}/>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/AddRoom" component={AddRoom}/>
          <Route exact path="/LocationRoom" component={LocationRoom}/>
          <Route exact path="/EditRooms" component={EditRoom}/>
          <Route exact path="/Rooms" component={Rooms}/>
          <Route exact path="/AddLocations" component={AddLocation}/>
          <Route exact path="/EditLocations" component={EditLocation}/>
          <Route exact path="/SignUp" component={Form}/>
          <Route exact path="/Locations" component={All_Locations}/>
          <Route exact path="/AcceptRejectReservation" component={Reservations}/>
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
