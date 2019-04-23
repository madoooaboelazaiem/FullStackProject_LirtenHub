   

import React, {Component} from 'react'

import 'tachyons' 

import {createHashHistory}from "history"

import { connect } from "react-redux";

import { login } from "../../actions/authactions";

import $ from 'jquery';

import { Redirect } from 'react-router-dom';

import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'

import axios from "axios"

import { logout } from "../../actions/authactions";
class HeaderSignedIN extends Component{
  // onClick(e){
  //   ("#menu-toggle").click(function(e) {
  //     e.preventDefault();
  //     ("#wrapper").toggleClass("toggled");
  //   });
  // }
    constructor(props) {
    super(props)
    this._toggleDiv = this._toggleDiv.bind(this)
  }
  
  _toggleDiv() {
    
      $("#wrapper").toggleClass("toggled");
    
  }
  onSubmit = e => {
    e.preventDefault();
  axios.put('https://lirtenhub-nav2.herokuapp.com/api/users/Logout/'+(this.props.loggedUser.id), {}).then(res => {
  });
    const { dispatch } = this.props;
    dispatch(logout());
}
onSubmit2 = e => {
  e.preventDefault();
axios.put('https://lirtenhub-nav2.herokuapp.com/api/users/Logout/'+(this.props.loggedUser.id), {}).then(res => {
});
  const { dispatch } = this.props;
  dispatch(logout());

  return <Redirect to = '/SignIn'/>
}

//<Link  className="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>
    render(){
      const { dispatch } = this.props;
      const x = this.props.loggedUser
      console.log(this.props.loggedUser)
      
      
      if(x.User_Category=="Admin"){
          return(
          <div>



  
          <div className="d-flex toggled" id="wrapper">
      
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"> <img src='https://img.icons8.com/color/48/000000/batman-old.png'/>    </div>
            <div className="list-group list-group-flush">
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/CoworkingLoc">MyLocations</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Locations/notEdit">All Locations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AcceptRejectReservation">Reservations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Reserve">Add Reservation</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/DeleteReservations">Cancel Reservation</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AddLocations">Add Locations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/LocationRoom">Add Room</Link>
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Rooms">Edit Room</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Calendar">Calendar</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/projects" >All Projects</Link>
      
            </div>
  
            
          </div>
          
      
        
            <div id="page-content-wrapper">
        
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse white-80" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active white-80">
                      {/* <a class="nav-link hover-bg-light-gray" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <li class="nav-item">
                       
                       <Link   class="nav-link hover-bg-light-blue" to={"/SingleValidateUser"} >Validate Users</Link>
                       </li> 
                       <li class="nav-item">
                       <Link   class="nav-link hover-bg-light-blue" to={"/SingleUpdate"} >AcceptorReject Updates</Link>
  
               </li> 
                       <li class="nav-item">
                       <Link   class="nav-link hover-bg-light-gray" to={"/AcceptrejectSingleSkill"} >AcceptorReject Skills</Link>
                       </li> 
                        <li class="nav-item">
                        <Link  class="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>       
                             </li> 
                    <li className="nav-item dropdown white ">
                      <a className="nav-link dropdown-toggle hover-bg-light-gray " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        
                      <form onSubmit={this.onSubmit.bind(this)}>
                              <button className="dropdown-item black-80" type="submit">Logout</button></form>
                             
                        <Link className="dropdown-item black-80"to = '/SignIn' onClick={this.onSubmit.bind(this)}>ChangeAccount</Link>
                        <div className="dropdown-divider white-80"></div>
                        <a className="dropdown-item black-80" href="/">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </nav>
              {this.props.children}
      
             
            </div>
        
          </div>
        
        
        
        </div>
        
        )

         
      }
      else if(x.User_Category=="Partner"){
        return(
          <div>
      
      
      
      
        
      
        
          <div className="d-flex toggled" id="wrapper">
      
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"> <img src='https://img.icons8.com/color/48/000000/batman-old.png'/>    </div>
            <div className="list-group list-group-flush">
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/CoworkingLoc">MyLocations</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Locations/notEdit">All Locations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AcceptRejectReservation">Reservations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Reserve">Add Reservation</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/DeleteReservations">Cancel Reservation</Link>
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AddLocations">Add Locations</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/LocationRoom">Add Room</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Rooms">Edit Room</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Calendar">Calendar</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/projects" >All Projects</Link>
      
            </div>
            
          </div>
          
      
        
            <div id="page-content-wrapper">
        
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse white-80" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active white-80">
                      {/* <a class="nav-link hover-bg-light-gray" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <Link  className="nav-link hover-bg-light-gray"  to={"/"} >Home</Link>
      
                    <li className="nav-item">
                    <Link   className="nav-link hover-bg-light-gray" to={"/SingleSkill"} >Apply For a Skill</Link>
                    </li> 
                     <li className="nav-item">
                     <Link  className="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>       
                          </li> 
                    <li className="nav-item dropdown white ">
                      <a className="nav-link dropdown-toggle hover-bg-light-gray " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        
                      <form onSubmit={this.onSubmit.bind(this)}>
                              <button className="dropdown-item black-80" type="submit">Logout</button></form>
                             
                        <Link className="dropdown-item black-80"to = '/SignIn' onClick={this.onSubmit.bind(this)}>ChangeAccount</Link>
                        <div className="dropdown-divider white-80"></div>
                        <a className="dropdown-item black-80" href="/">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </nav>
              {this.props.children}
      
             
            </div>
        
          </div>
        
        
        
        </div>
        
      
      
      
      
      
            
      )
      }
      else if(x.User_Category=="Consulting_Agent"){
        return(
          <div>
      
      
      
      
        
      
        
          <div className="d-flex toggled" id="wrapper">
      
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"> <img src='https://img.icons8.com/color/48/000000/batman-old.png'/>    </div>
            <div className="list-group list-group-flush">
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/CoworkingLoc">MyLocations</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Locations/notEdit">All Locations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AcceptRejectReservation">Reservations</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Reserve">Add Reservation</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/DeleteReservations">Cancel Reservation</Link>
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AddLocations">Add Locations</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/LocationRoom">Add Room</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Rooms">Edit Room</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Calendar">Calendar</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/projects" >All Projects</Link>
      
            </div>
            
          </div>
          
      
        
            <div id="page-content-wrapper">
        
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse white-80" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active white-80">
                      {/* <a class="nav-link hover-bg-light-gray" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <Link  className="nav-link hover-bg-light-gray"  to={"/"} >Home</Link>
      
                    <li className="nav-item">
                    <Link   className="nav-link hover-bg-light-gray" to={"/SingleSkill"} >Apply For a Skill</Link>
                    </li> 
                     <li className="nav-item">
                     <Link  className="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>       
                          </li> 
                    <li className="nav-item dropdown white ">
                      <a className="nav-link dropdown-toggle hover-bg-light-gray " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        
                      <form onSubmit={this.onSubmit.bind(this)}>
                              <button className="dropdown-item black-80" type="submit">Logout</button></form>
                             
                        <Link className="dropdown-item black-80"to = '/SignIn' onClick={this.onSubmit.bind(this)}>ChangeAccount</Link>
                        <div className="dropdown-divider white-80"></div>
                        <a className="dropdown-item black-80" href="/">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </nav>
              {this.props.children}
      
             
            </div>
        
          </div>
        
        
        
        </div>
        
      
      
      
      
      
            
      )
      }

      else if(x.User_Category=="Member"){
        return(
          <div>
      
      
      
      
        
      
        
          <div className="d-flex toggled" id="wrapper">
      
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"> <img src='https://img.icons8.com/color/48/000000/batman-old.png'/>    </div>
            <div className="list-group list-group-flush">
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/CoworkingLoc">MyLocations</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Locations/notEdit">All Locations</Link>
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AcceptRejectReservation">Reservations</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Reserve">Add Reservation</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/DeleteReservations">Cancel Reservation</Link>
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AddLocations">Add Locations</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/LocationRoom">Add Room</Link> */}
            {/* <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Rooms">Edit Room</Link> */}
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Calendar">Calendar</Link>
            <Link className="list-group-item list-group-item-action white-80 bg-light" to="/projects" >All Projects</Link>
      
            </div>
            
          </div>
          
      
        
            <div id="page-content-wrapper">
        
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse white-80" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active white-80">
                      {/* <a class="nav-link hover-bg-light-gray" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <Link  className="nav-link hover-bg-light-gray"  to={"/"} >Home</Link>
      
                    <li className="nav-item">
                    <Link   className="nav-link hover-bg-light-gray" to={"/SingleSkill"} >Apply For a Skill</Link>
                    </li> 
                     <li className="nav-item">
                     <Link  className="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>       
                          </li> 
                    <li className="nav-item dropdown white ">
                      <a className="nav-link dropdown-toggle hover-bg-light-gray " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        
                      <form onSubmit={this.onSubmit.bind(this)}>
                              <button className="dropdown-item black-80" type="submit">Logout</button></form>
                             
                        <Link className="dropdown-item black-80"to = '/SignIn' onClick={this.onSubmit.bind(this)}>ChangeAccount</Link>
                        <div className="dropdown-divider white-80"></div>
                        <a className="dropdown-item black-80" href="/">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </nav>
              {this.props.children}
      
             
            </div>
        
          </div>
        
        
        
        </div>
        
      
      
      
      
      
            
      )
      }
      else{//Coworking
      return(
    <div>




  

  
    <div className="d-flex toggled" id="wrapper">

    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading"> <img src='https://img.icons8.com/color/48/000000/batman-old.png'/>    </div>
      <div className="list-group list-group-flush">
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/CoworkingLoc">MyLocations</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Locations/notEdit">All Locations</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AcceptRejectReservation">Reservations</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Reserve">Add Reservation</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/DeleteReservations">Cancel Reservation</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/AddLocations">Add Locations</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/LocationRoom">Add Room</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Rooms">Edit Room</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/Calendar">Calendar</Link>
      <Link className="list-group-item list-group-item-action white-80 bg-light" to="/projects" >All Projects</Link>

      </div>
      
    </div>
    

  
      <div id="page-content-wrapper">
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button className="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse white-80" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li className="nav-item active white-80">
                {/* <a class="nav-link hover-bg-light-gray" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              <Link  className="nav-link hover-bg-light-gray"  to={"/"} >Home</Link>

              <li className="nav-item">
              <Link   className="nav-link hover-bg-light-gray" to={"/SingleSkill"} >Apply For a Skill</Link>
              </li> 
               <li className="nav-item">
               <Link  className="nav-link hover-bg-light-gray"  to={"/Profile/"+x.id} >MyProfile</Link>       
                    </li> 
              <li className="nav-item dropdown white ">
                <a className="nav-link dropdown-toggle hover-bg-light-gray " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  
                <form onSubmit={this.onSubmit.bind(this)}>
                        <button className="dropdown-item black-80" type="submit">Logout</button></form>
                       
                  <Link className="dropdown-item black-80"to = '/SignIn' onClick={this.onSubmit2.bind(this)}>ChangeAccount</Link>
                  <div className="dropdown-divider white-80"></div>
                  <a className="dropdown-item black-80" href="/">About</a>
                </div>
              </li>
            </ul>
          </div>
          
        </nav>
        {this.props.children}

       
      </div>
  
    </div>
  
  
  
  </div>
  





      
)}
      
}
}

function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
export default connect(mapStateToProps)(HeaderSignedIN);