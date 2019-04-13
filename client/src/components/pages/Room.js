import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';
import { Route, BrowserRouter as Router,Link ,Switch } from 'react-router-dom'

 class Room extends Component {
  
  state={

    Y:this.props.R._id

    }

  render() {
    return (//R is Actullay the Room Info itself
     
<div> 
<Link className = "hideLink" to={{
  pathname: '/EditRooms',
  state: {
    RoomID: this.state.Y
  }
}} > <h3>{this.props.R.Roomname}
        <br></br>
      {this.props.R.capacity}
      <br></br>
        {this.props.R.fee}
        </h3></Link>
       
      </div>
    )
  }
}

Room.propTypes ={
  R:PropTypes.object.isRequired
}

export default Room
