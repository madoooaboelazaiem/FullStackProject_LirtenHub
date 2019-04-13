import Parser from 'html-react-parser';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'tachyons'
import axios from 'axios';

class AddRoom extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Roomname: '',
      capacity: '',
      fee: ''
      
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmitAddRoom = this.handleSubmitAddRoom.bind(this)

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  handleSubmitAddRoom(event) {

      event.preventDefault();
      const {locationID} = this.props.location.state
console.log({locationID})
      axios.post('https://lirtenhub-nav2.herokuapp.com/api/rooms/', {
      
        Roomname: this.state.Roomname,
        capacity: this.state.capacity,
        fee: this.state.fee,
        LocationID: locationID,
        OwnerId: '5cb1376f4627295b79e1a5d3'

      }).then(res => {
        this.setState({
          redirect: res.data
        })
        console.log(res.data)
      }).then(alert('Room Added Successfully '))
      
    }
    render(){
        return(
          <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Registration Form</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
          <link rel="stylesheet" href="../layout/Form.css"/>
        <body>
          <div className="container">
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h1>Add Room</h1>
                <ul>
                
                </ul>
              </div>
              <div className="contact">
                  <h3>New Room Data</h3>
                  <form onSubmit={this.handleSubmitAddRoom} className="Field">
                  <p>
                      <label>Roomname</label>
                      <input type="text" name="Roomname" onChange={this.onChange} value={this.state.Roomname} required/>
                    </p>
                    <p>
                      <label>Capacity</label>
                      <input type="number" name="capacity" onChange={this.onChange} value={this.state.capacity} required/>
                    </p>
                    <p>
                      <label>Fee</label>
                      <input type="number" name="fee"onChange={this.onChange} value={this.state.fee} required/>
                </p>
                <p >
                </p>
                                
                    <p className="ful">
                     <span className = 'reg'> <button type="submit">Submit</button> </span>
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
export default AddRoom
