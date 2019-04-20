   

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
  axios.put('Https://Lirtenhubtest.herokuapp.com/api/users/Logout/'+(this.props.loggedUser.id), {}).then(res => {
  });
    const { dispatch } = this.props;
    console.log("HIIIIIIIIII")
    dispatch(logout());
}
//<Link  className="nav-link hover-bg-light-blue"  to={"/Profile/"+x.id} >MyProfile</Link>
    render(){
      const { dispatch } = this.props;
      const x = this.props.loggedUser
      console.log(this.props.loggedUser)

      if(this.props.isLoggedIn===false){
        return  <div><Redirect to='/' />;
        </div>
      }
      if(this.props.loggedUser.User_Category=="Admin"){
        return(
          <div>
        
        
          <body >
          
          
          
            <div class="d-flex toggled" id="wrapper">
          
              <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading"> <img src="https://img.icons8.com/color/48/000000/superman.png"/>    </div>
                <div class="list-group list-group-flush">
                  <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Dashboard</a>
                  <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Shortcuts</a>
                  <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Overview</a>
                  <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Events</a>
                  <a href="" class="list-group-item list-group-item-action white-80 bg-light">Profile</a>
                  <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Status</a>
                </div>
              </div>
          
              <div id="page-content-wrapper">
          
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <button class="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
          
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
          
                  <div class="collapse navbar-collapse white-80" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                      <li class="nav-item active white-80">
                        {/* <a class="nav-link hover-bg-light-blue" href="#">Home <span class="sr-only">(current)</span></a> */}
                      </li>
                      <li class="nav-item">
                      <Link   class="nav-link hover-bg-light-blue" to={"/AcceptrejectSingleSkill"} >AcceptorReject Skills</Link>
                      </li> 
                       <li class="nav-item">
                       <Link  class="nav-link hover-bg-light-blue"  to={"/Profile/"+x.id} >MyProfile</Link>       
                            </li> 
                      <li class="nav-item dropdown white ">
                        <a class="nav-link dropdown-toggle hover-bg-light-blue " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Account
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                          
                        <form onSubmit={this.onSubmit.bind(this)}>
                                <button class="dropdown-item black-80" type="submit">Logout</button></form>
          
                          <a class="dropdown-item black-80" href="/">ChangeAccount</a>
                          <div class="dropdown-divider white-80"></div>
                          <a class="dropdown-item black-80" href="#">About</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                </nav>
          
               
              </div>
          
            </div>
          
          
          
          </body>
          </div>
        )
      }
return(
  <div>


  <body >
  
  
  
    <div class="d-flex toggled" id="wrapper">
  
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"> <img src="https://img.icons8.com/color/48/000000/superman.png"/>    </div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Dashboard</a>
          <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Shortcuts</a>
          <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Overview</a>
          <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Events</a>
          <a href="" class="list-group-item list-group-item-action white-80 bg-light">Profile</a>
          <a href="#" class="list-group-item list-group-item-action white-80 bg-light">Status</a>
        </div>
      </div>
  
      <div id="page-content-wrapper">
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button class="btn btn-primary" id="menu-toggle" onClick={this._toggleDiv}>LirtenHub</button>
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse white-80" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li class="nav-item active white-80">
                {/* <a class="nav-link hover-bg-light-blue" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              <li class="nav-item">
              <Link   class="nav-link hover-bg-light-blue" to={"/SingleSkill"} >Apply For a Skill</Link>
              </li> 
               <li class="nav-item">
               <Link  class="nav-link hover-bg-light-blue"  to={"/Profile/"+x.id} >MyProfile</Link>       
                    </li> 
              <li class="nav-item dropdown white ">
                <a class="nav-link dropdown-toggle hover-bg-light-blue " href="#" id="navbarDropdown" role="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  
                <form onSubmit={this.onSubmit.bind(this)}>
                        <button class="dropdown-item black-80" type="submit">Logout</button></form>
  
                  <a class="dropdown-item black-80" href="/">ChangeAccount</a>
                  <div class="dropdown-divider white-80"></div>
                  <a class="dropdown-item black-80" href="#">About</a>
                </div>
              </li>
            </ul>
          </div>
          
        </nav>
  
       
      </div>
  
    </div>
  
  
  
  </body>
  </div>
)
}
}

function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
export default connect(mapStateToProps)(HeaderSignedIN);