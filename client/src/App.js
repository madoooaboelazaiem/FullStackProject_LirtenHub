import React from 'react';
import SignIn from './components/layout/SignIn'
import Form from './components/pages/Form'
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
import CoworkingLocations from './components/CoworkingLocations';
import LandingPage from './components/layout/LandingPage';
import preRegistration from './components/pages/preRegistration';
import formconsultancy from './components/pages/formconsultancy';
import formcoworking from './components/pages/formcoworking';
import formpartner from './components/pages/formpartner';
import setAuthorizationToken from './utils.js/setAuthorizationToken';
import ApplySkill from './components/pages/ApplySkill';
import SingleSkill from './components/pages/SingleSkill';
import AcceptorDeclineSkill from './components/pages/AcceptorDeclineSkill';
import AcceptrejectSingleSkill from './components/pages/AcceptrejectSingleSkill';
import UpdateAcceptorReject from './components/pages/UpdateAcceptorReject';
import SingleUpdate from './components/pages/SingleUpdate';
import SingleValidateUser from './components/pages/SingleValidateUser';
import ValidateUser from './components/pages/ValidateUser';
import ADDP from './components/pages/Projects/AddProject.js'
import editP from './components/pages/Projects/EditProject.js'
import SingleConsult from './components/pages/Projects/SingleConsult';
import ApproveOrDeclineConsult from './components/pages/Projects/ApproveOrDeclineConsult';
import AddT from './components/pages/Projects/AddTask.js';
import A23 from './components/pages/Projects/myAP.js';
import A234 from './components/pages/Projects/conneed'
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
      setAuthorizationToken()
      if(this.props.isLoggedIn){    
        if(loggedUser.User_Category=="Admin")  {  
        return(
           <div>
            
      <Router >
      <X>

      <Switch>
      <Route  exact path="/" component={HomePage}/>
      
      {/* // <Route  exact path="/" component={HomePage}/> */}
      <Route exact path="/Editproject" component={editP}/>
      <Route exact path="/NewTask" component={AddT}/>
      <Route exact path="/NewProject"component={ADDP}/>
      <Route  exact path="/SingleProject/:id" component={Single_Project}/>
         <Route  exact path="/SingleProject/:id" component={Single_Project}/>
      
          <Route  exact path="/home" component={App}/>
          <Route  exact path="/AddRoom" component={AddRoom}/>
          <Route  exact path="/LocationRoom" component ={LocationRoom}/>
          <Route  exact path="/EditRooms" component={EditRoom}/>
          <Route  exact path="/Rooms" component={Rooms}/>
          <Route  exact path="/Reserve" component={Reserve}/>
          <Route  exact path="/AddLocations" component={AddLocation}/>
          <Route  exact path="/EditLocations" component={EditLocation}/>
          <Route  exact path="/Locations/notEdit" component={All_Locations}/>
          <Route  exact path="/CoworkingLoc" component={CoworkingLocations}/>
          <Route  exact path="/AcceptRejectReservation" component={Reservations}/>
          <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
          <Route  exact path="/Projects" component={All_Projects}/>
          <Route  exact path="/Calendar" component={Calendar}/>
          <Route   exact path="/Profile/:id" component={Profile}/>
          <Route   exact path="/AcceptorDeclineSkill/" component={AcceptorDeclineSkill}/>
          <Route   exact path="/AcceptrejectSingleSkill/" component={AcceptrejectSingleSkill}/>
          <Route  exact path="/SignIn" component={SignIn}/>
          <Route  exact path="/ApplySkill" component={ApplySkill}/>
          <Route  exact path="/UpdateAcceptorReject" component={UpdateAcceptorReject}/>
          <Route  exact path="/SingleUpdate" component={SingleUpdate}/>
          <Route  exact path="/SingleValidateUser" component={SingleValidateUser}/>
          <Route  exact path="/ValidateUser" component={ValidateUser}/>
          <Route  exact path="/SingleSkill" component={SingleSkill}/>
          <Route   exact path="/Changepw/:id" component={Changepw}/>
          <Route   exact path="/SingleConsult" component={SingleConsult}/>
          <Route   exact path="/ApproveOrDeclineConsult" component={ApproveOrDeclineConsult}/>
          </Switch>
          </X>
          </Router>
      </div>

        )
      }
    
    
    
    else if(loggedUser.User_Category=="Partner"){
      return(
          
            
          
          
        <div>
          
    <Router >
    <X>

    <Switch>
    <Route  exact path="/" component={HomePage}/>
    
    {/* // <Route  exact path="/" component={HomePage}/> */}
    <Route exact path="/NewTask" component={AddT}/>
       <Route  exact path="/SingleProject/:id" component={Single_Project}/>
        <Route  exact path="/home" component={App}/>
        <Route  exact path="/Reserve" component={Reserve}/>
        <Route  exact path="/Locations/notEdit" component={All_Locations}/>
        <Route  exact path="/AcceptRejectReservation" component={Reservations}/>
        <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
        <Route  exact path="/Projects" component={All_Projects}/>
        <Route  exact path="/Project_Requests" component={Project_Requests}/>
        <Route  exact path="/approvedP" component={approvedP}/>
        <Route  exact path="/notapprovedP" component={notapprovedP}/>
        <Route  exact path="/Calendar" component={Calendar}/>
        <Route   exact path="/Profile/:id" component={Profile}/>
        <Route   exact path="/Edit/:id" component={Edit}/>
        <Route   exact path="/AcceptorDeclineSkill/" component={AcceptorDeclineSkill}/>
        <Route   exact path="/AcceptrejectSingleSkill/" component={AcceptrejectSingleSkill}/>
        <Route  exact path="/SignIn" component={SignIn}/>
        <Route  exact path="/ApplySkill" component={ApplySkill}/>
        <Route  exact path="/UpdateAcceptorReject" component={UpdateAcceptorReject}/>
        <Route  exact path="/SingleUpdate" component={SingleUpdate}/>
        <Route  exact path="/SingleSkill" component={SingleSkill}/>
        <Route   exact path="/Changepw/:id" component={Changepw}/>
        <Route   exact path="/SingleConsult" component={SingleConsult}/>
          <Route   exact path="/ApproveOrDeclineConsult" component={ApproveOrDeclineConsult}/>
        </Switch>
        </X>
        </Router>
    </div>

      )
    }
    else if(loggedUser.User_Category=="Member"){
      return(
       <div>
          
    <Router >
    <X>

    <Switch>
    <Route  exact path="/" component={HomePage}/>
    
    {/* // <Route  exact path="/" component={HomePage}/> */}
        <Route  exact path="/myap" component={A23}/>
        <Route  exact path="/home" component={App}/>
        <Route  exact path="/Reserve" component={Reserve}/>
        <Route  exact path="/Locations/notEdit" component={All_Locations}/>
        <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
        <Route  exact path="/Projects" component={All_Projects}/>
        <Route  exact path="/Calendar" component={Calendar}/>
        <Route   exact path="/Profile/:id" component={Profile}/>
        <Route   exact path="/Edit/:id" component={Edit}/>
        <Route  exact path="/SignIn" component={SignIn}/>
        <Route  exact path="/ApplySkill" component={ApplySkill}/>
        <Route  exact path="/SingleUpdate" component={SingleUpdate}/>
        <Route  exact path="/SingleSkill" component={SingleSkill}/>
        <Route   exact path="/Changepw/:id" component={Changepw}/>
        </Switch>
        </X>
        </Router>
    </div>

      )
    }
    else if (loggedUser.User_Category == "Consulting_Agent"){
      return(       
        <div>
          
    <Router >
    <X>

    <Switch>
    <Route  exact path="/" component={HomePage}/>
    
    {/* // <Route  exact path="/" component={HomePage}/> */}
    <Route exact path="/NewTask" component={AddT}/>
    <Route exact path="/conneed" component={A234}/>
       <Route  exact path="/SingleProject/:id" component={Single_Project}/>
        <Route  exact path="/home" component={App}/>
        <Route  exact path="/Reserve" component={Reserve}/>
        <Route  exact path="/Locations/notEdit" component={All_Locations}/>
        <Route  exact path="/AcceptRejectReservation" component={Reservations}/>
        <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
        <Route  exact path="/Projects" component={All_Projects}/>
        <Route  exact path="/Project_Requests" component={Project_Requests}/>
        <Route  exact path="/approvedP" component={approvedP}/>
        <Route  exact path="/notapprovedP" component={notapprovedP}/>
        <Route   exact path="/Profile/:id" component={Profile}/>
        <Route   exact path="/Edit/:id" component={Edit}/>
        <Route  exact path="/SignIn" component={SignIn}/>
        <Route  exact path="/ApplySkill" component={ApplySkill}/>
        <Route  exact path="/UpdateAcceptorReject" component={UpdateAcceptorReject}/>
        <Route  exact path="/SingleUpdate" component={SingleUpdate}/>
        <Route  exact path="/SingleValidateUser" component={SingleValidateUser}/>
        <Route  exact path="/ValidateUser" component={ValidateUser}/>
        <Route  exact path="/SingleSkill" component={SingleSkill}/>
        <Route   exact path="/Changepw/:id" component={Changepw}/>
        <Route   exact path="/SingleConsult" component={SingleConsult}/>
          <Route   exact path="/ApproveOrDeclineConsult" component={ApproveOrDeclineConsult}/>
        </Switch>
        </X>
        </Router>
    </div>

      )
    }
    else{//Coworking
      return(          
        <div>
          
    <Router >
    <X>

    <Switch>
    
    {/* // <Route  exact path="/" component={HomePage}/> */}
    
    <Route  exact path="/SingleProject/:id" component={Single_Project}/>
       <Route  exact path="/SingleProject/:id" component={Single_Project}/>
        <Route  exact path="/home" component={App}/>
        <Route  exact path="/AddRoom" component={AddRoom}/>
        <Route  exact path="/LocationRoom" component={LocationRoom}/>
        <Route  exact path="/EditRooms" component={EditRoom}/>
        <Route  exact path="/Rooms" component={Rooms}/>
        <Route  exact path="/Reserve" component={Reserve}/>
        <Route  exact path="/AddLocations" component={AddLocation}/>
        <Route  exact path="/EditLocations" component={EditLocation}/>
        <Route  exact path="/Locations/notEdit" component={All_Locations}/>
        <Route  exact path="/CoworkingLoc" component={CoworkingLocations}/>
        <Route  exact path="/AcceptRejectReservation" component={Reservations}/>
        <Route  exact path="/DeleteReservations" component={DeleteReservations}/>
        <Route  exact path="/Projects" component={All_Projects}/>
        <Route  exact path="/Project_Requests" component={Project_Requests}/>
        <Route  exact path="/Calendar" component={Calendar}/>
        <Route   exact path="/Profile/:id" component={Profile}/>
        <Route  exact path="/SignIn" component={SignIn}/>
        <Route  exact path="/SingleSkill" component={SingleSkill}/>
        <Route   exact path="/Changepw/:id" component={Changepw}/>
        </Switch>
        </X>
        </Router>
    </div>

      )
    }
  }
    else{
      return (
      <div>
        
      <Router>
      <Route exact  path="/" component={LandingPage}/>

      <Header/>

      <Route exact  path="/SignIn" component={SignIn}/>
      <Route exact  path="/SignUp" component={preRegistration}/>
      <Route exact  path="/SignUp1" component={Form}/>
      <Route exact  path="/SignUp2" component={formconsultancy}/>
      <Route exact  path="/SignUp3" component={formcoworking}/>
      <Route exact  path="/SignUp4" component={formpartner}/>
      </Router>

      </div>

    )}
    
  }
  }


export default connect(mapStateToProps)(App);
