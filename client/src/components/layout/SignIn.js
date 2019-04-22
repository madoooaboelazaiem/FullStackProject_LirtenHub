import Parser from "html-react-parser";
import React, { Component } from "react";
import PropTypes from "prop-types";
import "tachyons";
import { login } from "../../actions/authactions";
import { Link,Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios'
import {getuserbyid} from '../../actions/useractions'
import {createHashHistory}from "history"
import Profile from "../pages/Profile"
class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
      users:""
    };
  }
  

  onSubmit = e => {
    const history = createHashHistory()
    e.preventDefault();
    const { dispatch } = this.props;
    const { name, pwd } = this.state;
    const data = { Email: name, Password: pwd };
    dispatch(login(data));
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  handleClick(e){
    const { dispatch } = this.props;
    dispatch(getuserbyid())
  }


  render() {  
    const { identifier, password } = this.state;
    const {isLoggedIn,loggedUser,users} = this.props;
    if(isLoggedIn) {
      return <div>
      <h3>{console.log(loggedUser)}</h3>
      <h4>{this.props.history.push("/")}</h4>
     
      <h5></h5>
      </div>
    }
   
    return (
      <div>
      {/* <div className="header">
      <a href="#" className="logo">LirtenHub</a>
      <div className="header-right">
        <a className="active" href="/">SignIn</a>
        <a href="/SignUp">SignUp</a>
        <a href="/About">About</a>
        <Router>
                  <Link  to={"/Profile/"+x.id} >My profile</Link>
                    <div className="dropdown-content bg-light-green ">
                      
                      <h3>{console.log("hello "+x.id)}</h3>
                      
                    
                  </div>
                  </Router>
      
      </div>
    
    </div> */}
      <div>
        <link rel="shortcut icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registration Form</title>
       
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
        />
        <link rel="stylesheet" href="../layout/Form.css" />
          <div className="container">
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h3 className = 'black'>Contact Us</h3>
                <ul>
                  <li>
                    <i className="fa fa-road" /> LirtenHub st
                  </li>
                  <li>
                    <i className="fa fa-phone" /> 0777 5000{" "}
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> LirtenHub@Lirten.com{" "}
                  </li>
                </ul>
              </div>
              <div className="contact">
                <form onSubmit={this.onSubmit.bind(this)}>
                  <span className="tc">
                    <div className="shift">
                      <p>
                        <label>Email</label>
                        <input
                          type="text"
                          name="name"
                          onChange={this.onChange.bind(this)}
                        />
                      </p>
                      <br />
                      <br />

                      <p>
                        <label>Password</label>
                        <input
                          type="password"
                          name="pwd"
                          onChange={this.onChange.bind(this)}
                        />
                      </p>
                    </div>
                    <br />
                    <br />
                    <div className="shift">
                      <p className="full">
                        <button onSubmit = {this.send }type="submit">Sign In</button>
                      </p>
                      <br />
                      </div>
                  </span>
                </form>
                      
                    
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}

export default connect(mapStateToProps)(registration);
{/* <NavLink to="/contact">Contact</NavLink> */}
