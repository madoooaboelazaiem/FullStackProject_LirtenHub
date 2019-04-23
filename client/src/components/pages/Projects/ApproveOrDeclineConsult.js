import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, button } from 'reactstrap';
import { Route, BrowserRouter as Router,Link ,Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {createHashHistory}from "history"
import axios from 'axios';

import PropTypes from 'prop-types'
import '../../layout/Cards.css'
import 'tachyons'
class ApproveOrDeclineConsult extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
        skillinstring:"",
     status: false,
      redirect: false

    }
    this.onClick = this.onClick.bind(this)

    this.routeChangeAccept = this.routeChangeAccept.bind(this);
    this.routeChangeReject = this.routeChangeReject.bind(this);

  }
  
  routeChangeReject(event) {
    event.preventDefault();
   axios({
        method: 'put',
        url:'https://lirtenhub-nav2.herokuapp.com/api/projects/declinecons/5ca9fc186d942f1eb821d7e9'+(this.props.loggedUser._id),
        data: {
            consid:this.props.P2._id
        }
      }).then(res => {
          this.setState({status:true})
        console.log(res)
        alert('The consultancy that applied is Rejected')
        
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
        url:'https://lirtenhub-nav2.herokuapp.com/api/projects/consassign/5ca9fc186d942f1eb821d7e9',
        data: {
            id:this.props.P2._id
        }
      }).then(res => {
       
        console.log(res)
        alert('The consultancy that applied is Approved')
        
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.error);
      })

    
  }

    render(){
        if(this.props.P2==undefined){
            return ( <Redirect to='/Home' />)
        }
        if(this.state.status==true){
            return ( <Redirect to='/ApproveOrDeclineConsult' />)
        }
      
        return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">
        
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
              <CardText>id: {  this.props.P2._id} category: {  this.props.P2.User_Category}</CardText>
                <CardText>{  this.props.P2.First_Name} {  this.props.P2.Last_Name}</CardText>
                <CardText>Bio: {  this.props.P2.Bio}</CardText>
                <CardText>Country: {  this.props.P2.Country}</CardText>
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
ApproveOrDeclineConsult.propTypes ={
    reserv:PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    // console.log(state.authentication.loggedUser)
     
     const { isLoggedIn,loggedUser } = state.authentication;
    const {users} = state.users
     return { isLoggedIn,loggedUser,users };
   }
   export default connect(mapStateToProps)(ApproveOrDeclineConsult);
