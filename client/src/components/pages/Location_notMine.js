import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';
import { Route, BrowserRouter as Router,Link ,Switch } from 'react-router-dom'

 class Location_notMine extends Component {
  
  state={
    all:this.props.L,

    Y:this.props.L._id,
    loc:null,
    done:null

    }
componentDidMount(){
  const rooms=[]

  if(this.state.all.locationRooms.length==0){
    this.setState({loc:rooms})
    this.setState({done:true})
  }
  else{
    console.log(this.state.all.locationRooms.length)
 for(let i=0;i<this.state.all.locationRooms.length;i++){
     const l = this.state.all.locationRooms[i];
     rooms.push(l)   
     rooms.push('\n')           
     this.setState({loc:rooms});
     this.setState({done:true})
   }}
}
  render() {
 
     if(this.state.done==null){
     return <div className="loader center"></div>}
    return (//L is Actullay the Location Info itself
     
<div> 
<Link className = "hideLink" to={{
  pathname: '/LocationProfile',
  state: {
    locationID: this.state.Y
  }
}} > <h3 className = 'loc'> <p className = 'blue'>Location Name</p>{this.props.L.name}
        <p className = 'blue'>Location Rooms</p> {this.state.loc}
        <p></p>
      {this.props.L.country}
      <p></p>
        {this.props.L.city}
        <p className = 'blue'>Location's Address</p>
         {this.props.L.street}
         <p className = 'blue'>Location's Info</p>
         {this.props.L.extraInfo}</h3></Link>
       
      </div>
    )
  }
}

Location_notMine.propTypes ={
  L:PropTypes.object.isRequired
}

export default Location_notMine
