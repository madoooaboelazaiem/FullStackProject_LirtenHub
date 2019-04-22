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
class AcceptorDeclineSkill extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
        skillinstring:"",
     status: false,
      redirect: false,
      Y:this.props.P2.skill

    }
    this.onClick = this.onClick.bind(this)

    this.routeChangeAccept = this.routeChangeAccept.bind(this);
    this.routeChangeReject = this.routeChangeReject.bind(this);

  }
  
  routeChangeReject(event) {
    event.preventDefault();
   axios({
        method: 'put',
        url:'https://lirtenhub-nav2.herokuapp.com/api/users/declineSkill/'+(this.props.P2.user._id),
        data: {
            Skill:this.state.Y
        }
      }).then(res => {
          this.setState({status:true})
        console.log(res)
        alert('The Skill '+this.props.P2.user.First_Name+" "+this.props.P2.user.Last_Name+" is Rejected")
        
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
        url:'https://lirtenhub-nav2.herokuapp.com/api/users/approveSkill/'+(this.props.P2.user._id),
        data: {
            Skill:this.state.Y
        }
      }).then(res => {
        this.setState({
            status: true 
         }) 
        console.log(res)
        alert('The Skill that'+this.props.P2.user.First_Name+" "+this.props.P2.user.Last_Name+" requested is Approved")
        
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
            return ( <Redirect to='/AcceptorDeclineSkill' />)
        }
        const {user,skill} = this.props.P2
        axios.get('http://localhost:3000/api/skills/'+(skill))

.then(res => {       

const P2 = res.data.X;     
this.setState({skillinstring:P2})  
})

        return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">
        
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
              <CardText>id: {user._id} category: {user.User_Category}</CardText>
                <CardText>{user.First_Name} {user.Last_Name}</CardText>
                <CardText>Bio: {user.Bio}</CardText>
                <CardText>Country: {user.Country}</CardText>
                <CardText>{this.state.skillinstring.Name} {this.state.skillinstring.Description}</CardText>
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
AcceptorDeclineSkill.propTypes ={
    reserv:PropTypes.object.isRequired
  }
  
  
  export default AcceptorDeclineSkill