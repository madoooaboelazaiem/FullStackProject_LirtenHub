import Parser from 'html-react-parser';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

class registration extends Component{
    
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
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h3>Contact Us</h3>
                <ul>
                  <li><i className="fa fa-road"></i> LirtenHub st</li>
                  <li><i className="fa fa-phone"></i> 0777 5000 </li>
                  <li><i className="fa fa-envelope"></i> LirtenHub@Lirten.com </li>
                </ul>
              </div>
              <div className="contact">
                <form >
                  <span className = 'tc'>
                  <div className = 'shift'>
                  <p>
                    <label>Username</label>
                    <input type="text" name="name"/>
                  </p>
                  <br></br>
                  <br></br>
                  
                  <p>
                    <label>Password</label>
                    <input type="password" name="pwd"/>
                  </p>
                  </div>
                  <br></br>
                  <br></br>
                  <div className = 'shift'>
                  <p classNameName="full">
                    <button type="submit">Sign In</button> 
                    </p>
                   <br></br>
                   <form action="http://localhost:3000/SignUp">
                  <span className ='signss'> 
                   <button className ='tc' type="submit" >Sign Up</button> 
                  </span>
                  </form>
                  
                  
                  </div>
                  </span>
                 
                 

                 
                </form>
              </div>
            </div>
          </div>
        
        </body>
          </div>

        )
    }
    

}
export default registration
