import React from 'react';
import SignIn from './components/layout/SignIn'
import Form from './components/layout/Form'
import AddLocation from './components/AddLocation'
import EditLocation from './components/EditLocation'
import Header from './components/layout/HeaderNotSignedIN'
import All_Locations from './components/All_Locations'
import AddRoom from './components/AddRoom'
import LocationRoom from './components/LocationRooms'
import EditRoom from './components/EditRoom'
import Rooms from './components/Rooms'
import Reserve from './components/AddReservation'
import DeleteReservations from './components/pages/DeleteRes'
import Reservations from './components/pages/Reservations'
import { connect } from "react-redux";
import Calendar from './components/layout/Calendar'
import { Route, BrowserRouter as Router,Link ,browserHistory,Switch } from 'react-router-dom'
import Profile from './components/pages/Profile'
import {createHashHistory}from "history"
import Edit from './components/pages/Edit';
import X from './components/layout/HeaderSignedIN'
import HomePage from './components/pages/HomePage'
import Changepw from './components/pages/Changepw';
import All_Projects from './components/pages/Projects/All_Projects'
import Project_Requests from './components/pages/Projects/Project_Requests'
import Single_Project from './components/pages/Projects/Single_Project'
import approvedP from "./components/pages/Projects/approvedP.js"
import notapprovedP from './components/pages/Projects/notapprovedP.js'
//gowaha sign in w de hat7awelny 3ala app.js
// sign up w de hat7awelny 3ala form

function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
class App extends React.Component {
 
  render(){ 
      const loggedUser=this.props.loggedUser
      if(this.props.isLoggedIn){        
        return(
          
            
          
          
          <div>
      <Router >
      <X/>

      <Switch>
      <Route  exact path="/" component={HomePage}/>
      
         <Route  exact path="/SingleProject/:id" component={Single_Project}/>
          <Route  exact path="/home" component={App}/>
          <Route  exact path="/AddRoom" component={AddRoom}/>
          <Route  exact path="/LocationRoom" component={LocationRoom}/>
          <Route  exact path="/EditRooms" component={EditRoom}/>
          <Route  exact path="/Rooms" component={Rooms}/>
          <Route  exact path="/Reserve" component={Reserve}/>
          <Route  exact path="/AddLocations" component={AddLocation}/>
          <Route  exact path="/EditLocations" component={EditLocation}/>
          <Route  exact path="/Locations" component={All_Locations}/>
          <Route  exact path="/AcceptRejectReservation" component={Reservations}/>
          <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
          <Route  exact path="/Projects" component={All_Projects}/>
          <Route  exact path="/Project_Requests" component={Project_Requests}/>
          <Route  exact path="/approvedP" component={approvedP}/>
          <Route  exact path="/notapprovedP" component={notapprovedP}/>
          <Route  exact path="/Calendar" component={Calendar}/>
          <Route   exact path="/Profile/:id" component={Profile}/>
          <Route   exact path="/Edit/:id" component={Edit}/>
          <Route   exact path="/Changepw/:id" component={Changepw}/>
          </Switch>
          </Router>
      </div>

        )
      }
      else{
    return (
      <div>
        
      <Router>
      <Header/>
      <Route exact  path="/" component={SignIn}/>
      <Route exact  path="/SignUp" component={Form}/>
      </Router>
      </div>

    )}
    
  }
  }


export default connect(mapStateToProps)(App);
