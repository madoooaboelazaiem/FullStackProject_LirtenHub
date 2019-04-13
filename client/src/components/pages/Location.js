import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';

 class Location extends Component {
  


  render() {
    return (//L is Actullay the Location Info itself
      <div>


        <span>

        <h3>{this.props.L.name}
        <br></br>
        {this.props.L.locationRooms[0]}
        <br></br>
        {this.props.L.locationRooms[1]}
       <br></br>
      {this.props.L.country}
      <br></br>
        {this.props.L.city}
        <br></br>
        {this.props.L.street}</h3>
        </span>
      </div>
    )
  }
}

Location.propTypes ={
  L:PropTypes.object.isRequired
}

export default Location
