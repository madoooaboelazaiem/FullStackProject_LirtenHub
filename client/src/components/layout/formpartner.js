import Parser from 'html-react-parser';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

class formpartner extends Component{
    
    render(){
        return(
            <div>
            <link rel="shortcut icon" href=""/>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Registration Form</title>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
            <link rel="stylesheet" href="../layout/Form.css"/>
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
                  <form method="POST" action="send">
                    <p>
                      <label>FirstName</label>
                      <input type="text" name="name"/>
                    </p>
                    <p>
                      <label>LastName</label>
                      <input type="text" name="company"/>
                    </p>
                    <p>
                      <label>Email Address</label>
                      <input type="email" name="email"/>
                    </p>
                    <p>
                      <label>Country</label>
                      <input type="text" name="phone"/>
                    </p>
                    <p>
                      <label>City</label>
                      <input type="text" name="phone"/>
                    </p> <p>
                      <label> Bio</label>
                      <input type="text" name="phone"/>
                    </p> <p>
                      <label>Phone Number</label>
                      <input type="text" name="phone"/>
                    </p>
                    
                    <p classNameName="full">
                     <span className = 'reg'> <button type="submit">Register</button> </span>
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
export default formpartner
