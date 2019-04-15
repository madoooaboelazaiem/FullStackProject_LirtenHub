import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'
import {createHashHistory}from "history"
<<<<<<< HEAD
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'
=======
import { Link,Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
import { connect } from "react-redux";
>>>>>>> b6aecc554bcfcef13ef49dc5a8c4fb36e0f5ce26
class Header extends Component{
  constructor(props) {
    super(props);
  }


    render(){
      const {isLoggedIn,loggedUser,users} = this.props;
      const x = this.props.loggedUser
      console.log(this.props.loggedUser)
  
        return(
        <div className="header">
          <a href="#default" className="logo">LirtenHub</a>
          <div className="header-right">
            <a className="active" href="/home">Home</a>
            <a href="#about">About</a>
<<<<<<< HEAD
              
=======
            <Router>
                      <Link  to={"/Profile/"+x.id} >My profile</Link>
                        <div className="dropdown-content bg-light-green ">
                          
                          <h3>{console.log("hello "+x.id)}</h3>
                          
                        
                      </div>
                      </Router>
          
            <h3></h3>
>>>>>>> b6aecc554bcfcef13ef49dc5a8c4fb36e0f5ce26
          </div>
        
        </div>
        
        )}
}
function mapStateToProps(state) {
  // console.log(state.authentication.loggedUser)
   
   const { isLoggedIn,loggedUser } = state.authentication;
  const {users} = state.users
   return { isLoggedIn,loggedUser,users };
 }
 export default connect(mapStateToProps)(Header);