import Parser from 'html-react-parser';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

class EditRoom extends Component{
    
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
                <h1>Edit Room</h1>
                <ul>
                
                </ul>
              </div>
              <div className="contact">
                  <h3>Room Data</h3>
                  <form method="POST" action="send">
                    <p>
                      <label>Room Name</label>
                      <input type="text" name="Roomname"/>
                    </p>
                    <p>
                      <label>Capacity</label>
                      <input type="text" name="capacity"/>
                    </p>
                    <p>
                      <label>Fee</label>
                      <input type="text" name="fee"/>
                    </p>
                    <p>
                      
                    </p>
                   
                  
                    <p classNameName="full">
                     <span className = 'reg'> <button type="submit">Update</button> </span>
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
export default EditRoom
