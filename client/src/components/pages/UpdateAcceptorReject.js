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
class UpdateAcceptorReject extends Component{
  
  constructor(props) {
    super(props);
    this.state = {

     status: false,
      redirect: false,
     

    }
    this.onClick = this.onClick.bind(this)

    this.routeChangeAccept = this.routeChangeAccept.bind(this);
    this.routeChangeReject = this.routeChangeReject.bind(this);

  }
  
  routeChangeReject(event) {
    event.preventDefault();
   axios({
        method: 'put',
        url:'https://lirtenhub-nav2.herokuapp.com/api/users/declineupdate/'+(this.props.P2.user._id),
        data: {
        }
      }).then(res => {
          this.setState({status:true})
        console.log(res)
        alert('The updates '+this.props.P2.user.First_Name+" "+this.props.P2.user.Last_Name+" is Rejected")
        
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.error);
      })

   


  
  }
  onClick(e) {
    console.log(this.state.Y)

}
  routeChangeAccept(event) {
     
    event.preventDefault();
    axios({
        method: 'put',
        url:'https://lirtenhub-nav2.herokuapp.com/api/users/approveupdate/'+(this.props.P2.user._id),
        data: {
         
        }
      }).then(res => {
        this.setState({
            status: true 
         }) 
        console.log(res)
        alert('The updates that'+this.props.P2.user.First_Name+" "+this.props.P2.user.Last_Name+" requested is Approved")
        
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.error);
      })

    
  }

    render(){
        const {user,Updates} = this.props.P2
        if(user.phone_number==""){
          return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">
        
            <Card>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
              <CardText>id: {user._id} category: {user.User_Category}</CardText>
                <CardText>{user.First_Name} {user.Last_Name} WANTS HIS NAME CHANGED TO {Updates.First_Name} {Updates.Last_Name} </CardText>
                <CardText> {user.Bio} ====> {Updates.Bio} </CardText>
                <CardText>{user.City},{user.Country} =====>  {Updates.City},{Updates.Country} </CardText>
                <CardText> {user.Experience_Level} ====> {Updates.Experience_Level} </CardText>
                <CardText> the user didn't type his phone number during registration ====> {Updates.phone_number} </CardText>
              </CardBody>
            </Card>
            <span className = 'tc'> 
                  <button className = 'but tc' onClick={this.routeChangeAccept}>Accept</button>
                  </span>
                <span className = 'tc'><button className = 'but'  onClick={this.routeChangeReject}>Decline</button></span>
              </form>
          </div>
        )
        }
       
        return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">
        
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
              <CardText>id: {user._id} category: {user.User_Category}</CardText>
                <CardText>{user.First_Name} {user.Last_Name} WANTS HIS NAME CHANGED TO {Updates.First_Name} {Updates.Last_Name} </CardText>
                <CardText> {user.Email} ====> {Updates.Email} </CardText>
                <CardText> {user.Bio} ====> {Updates.Bio} </CardText>
                <CardText>{user.City},{user.Country} =====>  {Updates.City},{Updates.Country} </CardText>
                <CardText> {user.Experience_Level} ====> {Updates.Experience_Level} </CardText>
                <CardText> {user.phone_number} ====> {Updates.phone_number} </CardText>
              </CardBody>
            </Card>
            <span className = 'tc'> 
                  <button className = 'but tc' onClick={this.routeChangeAccept}>Accept</button>
                  </span>
                <span className = 'tc'><button className = 'but'  onClick={this.routeChangeReject}>Decline</button></span>
              </form>
          </div>
        )
    }
  
}
UpdateAcceptorReject.propTypes ={
    reserv:PropTypes.object.isRequired
  }
  
  
  export default UpdateAcceptorReject