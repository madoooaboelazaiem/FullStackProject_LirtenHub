import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';
import { Route, BrowserRouter as Router,Link ,Switch } from 'react-router-dom'

 class LocationRoom extends Component {
    state={

    Y:this.props.L._id

    }
  render() {
    return (//L is Actullay the Location Info itself
      <div>


<Link className = "hideLink" to={{
  pathname: '/AddRoom',
  state: {
    locationID: this.state.Y
  }
}} > <h3>{this.props.L.name}
        <br></br>
        {this.props.L.locationRooms[0]}
        <br></br>
        {this.props.L.locationRooms[1]}
       <br></br>
      {this.props.L.country}
      <br></br>
        {this.props.L.city}
        <br></br>
        {this.props.L.street}</h3></Link>
       
      </div>
    )
  }
}

LocationRoom.propTypes ={
  L:PropTypes.object.isRequired
}

export default LocationRoom
