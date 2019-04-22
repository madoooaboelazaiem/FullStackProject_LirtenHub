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
class ApplySkill extends Component{
  
  constructor(props) {
    super(props);
    

  

  }
  
 
  ApplyforSkill(event) {
    event.preventDefault();
console.log(this.props.P2.id)
      axios({
        method: 'put',
        url:'https://lirtenhub-nav2.herokuapp.com/api/users/applyskill/'+(this.props.loggedUser.id),
        data: {
            Skill:this.props.P2._id
        }
      }).then(res => {
        console.log(res)
        alert('The Skill you applied on will be sent to the Admin For Approval')
        
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.error);
      })

    
  }
 
    render(){
        const {Name,Description} = this.props.P2
        return(
            <div className = "tc">
    <form onSubmit={this.handleSubmitReserve} className="Field">

            <div   onClick={this.onClick}>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
                <CardText>{Name}</CardText>
                <CardText>{Description}</CardText>
              </CardBody>
            </Card>
            </div>
            <span className = 'tc'>
                  <button className = 'but tc' color="secondary"  onClick={this.ApplyforSkill.bind(this)}>Apply for this Skill</button>
                  </span>
              </form>
          </div>
        )
    }
  
}
ApplySkill.propTypes ={
    reserv:PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    console.log(state.authentication.loggedUser)
    
    const { isLoggedIn,loggedUser } = state.authentication;
   const {users} = state.users
    return { isLoggedIn,loggedUser,users };
  }
 
export default connect(mapStateToProps)(ApplySkill);
