import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, button } from 'reactstrap';
import { Route, BrowserRouter as Router,Link ,Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {createHashHistory}from "history"

import axios from 'axios';

import PropTypes from 'prop-types'
import '../layout/Cards.css'
import 'tachyons'
class ValidateUser extends Component{
  
  constructor(props) {
    super(props);
    

  }
  
 
  Validate(event) {
    event.preventDefault();
console.log(this.props.P2.id)
      axios({
        method: 'put',
        url:'http://localhost:3000/api/users/validate/'+(this.props.P2._id),
        data: {
        }
      }).then(res => {
        console.log(res)
        alert(res)
        
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.error);
      })

    
  }
 
    render(){
         
        return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">

            <div   onClick={this.onClick}>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
                <CardText>{this.props.P2.First_Name} {this.props.P2.Last_Name}</CardText>
                <CardText>{this.props.P2.Email}</CardText>
                <CardText>{this.props.P2.password}</CardText>
              </CardBody>
            </Card>
            </div>
            <span className = 'tc'>
                  <button className = 'but tc' color="secondary"  onClick={this.Validate.bind(this)}>Validate User</button>
                  </span>
              </form>
          </div>
        )
    }
  
}
ValidateUser.propTypes ={
    reserv:PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    console.log(state.authentication.loggedUser)
    
    const { isLoggedIn,loggedUser } = state.authentication;
   const {users} = state.users
    return { isLoggedIn,loggedUser,users };
  }
 
export default connect(mapStateToProps)(ValidateUser);
