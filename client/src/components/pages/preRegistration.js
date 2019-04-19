import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {createHashHistory}from "history"

export default class preRegistration extends Component {

  onSubmitpartner = e => {
  this.props.history.push("/SignUp4")
}
onSubmitconsult = e => {
  this.props.history.push("/SignUp2")
}
onSubmitmember = e => {
  this.props.history.push("/SignUp1")
}
onSubmitcoworking = e => {
  this.props.history.push("/SignUp3")
}


  render() {
    return (
        <div>
        <link rel="shortcut icon" href=""/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Registration Form</title>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
        <link rel="stylesheet" href="../layout/preRegistration.css"/>
      <body>
        <div className="container">
          <h1 className="brand"><span>Registration</span> Form</h1>
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h3>Registration</h3>
              <ul>
                <li><i className="fa fa-road"></i> LirtenHub st</li>
                <li><i className="fa fa-phone"></i> 0777 5000 </li>
                <li><i className="fa fa-envelope"></i> LirtenHub@Lirten.com </li>
              </ul>
            </div>
            <div className="contact">
              <h3>Create New Account</h3>
              
                <p>
                  <label>please select which User category are u </label>
                </p>
                <form onSubmit={this.onSubmitconsult.bind(this)}>
                <p classNameName="full">
                 <span className = 'reg'> <button type="submit">Consulting Agent</button> </span>
                </p>
                </form>
                <form  onSubmit={this.onSubmitpartner.bind(this)} >
                <p classNameName="full">
                 <span className = 'reg'> <button type="submit">Partner</button> </span>
                </p>
                </form>
                <form  onSubmit={this.onSubmitmember.bind(this)}> 
                <p classNameName="full">
                 <span className = 'reg'> <button type="submit">Member</button> </span>
                </p>
                </form>
                <form   onSubmit={this.onSubmitcoworking.bind(this)}>
                <p classNameName="full">
                 <span className = 'reg'> <button type="submit">Co Working Space</button> </span>
                </p>
                </form>
               
             
            </div>
          </div>
        </div>
      
      </body>
        </div>
    )
  }
}
