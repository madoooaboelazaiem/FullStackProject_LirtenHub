import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';
import { Route, BrowserRouter as Router,Link ,Switch } from 'react-router-dom'

 class Location extends Component {
  
  state={

    Y:this.props.L._id

    }

  render() {
    return (//L is Actullay the Location Info itself
     
<div> 
<Link className = "hideLink" to={{
  pathname: '/EditLocations',
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

Location.propTypes ={
  L:PropTypes.object.isRequired
}

export default Location
