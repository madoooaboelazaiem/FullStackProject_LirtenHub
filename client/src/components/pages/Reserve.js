import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';
import { Route, BrowserRouter as Router,Link,Redirect ,Switch } from 'react-router-dom'
import axios from 'axios';
import {createHashHistory}from "history"


 class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
          from: '',
          to: '',
          X: this.props.R.LocationID,
          Y:this.props.R.Roomname,
          Z:this.props.R.OwnerId,
            added: false,
          redirect: false

        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.handleSubmitReserve = this.handleSubmitReserve.bind(this)

      }
      onChange(e){
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ [e.target.from]: e.target.value })
        this.setState({ [e.target.to]: e.target.value })


      }
      onClick(e) {
          console.log(this.state.X)
          console.log(this.state.Y)
          console.log(this.state.Z)

    }
    handleSubmitReserve(event) {

        event.preventDefault();
       
        console.log(this.state.from)
        console.log(this.state.to)
        axios.post('https://lirtenhub-nav2.herokuapp.com/api/reservations/', {
        
          RoomID: this.state.Y,
          from: this.state.from,
          to: this.state.to,
          LocationID: this.state.X,
          OwnerId: this.state.Z,
          client: "5cafcdadeebff820a470a077"
  
        }).then(res => {
          this.setState({
          })
          console.log(res.data)
        })
        .then(alert('Room Reserved Successfully '))
        .then(res =>{
            this.setState({
               added: true 
            }) 
 
         })
        
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect&&this.state.added) {
            alert('Room Reserved Successfully ')
          return <Redirect to='/home' />
        }
      }
  render() {
    return (
     
<div> 
<form onSubmit={this.handleSubmitReserve} className="Field">

<Link className = "hideLink" to={{
  state: {
    RoomID: this.state.Y,
    LocationID: this.state.X,
    OwnerId: this.state.Z

  }
}} onClick={this.onClick}> 

    <h3>{this.props.R.Roomname}
        <br></br>

      {this.props.R.capacity}
      <br></br>
        {this.props.R.fee}
        </h3>
        </Link>

        <p className = "tc">
        <label className ="red">From </label>
         <input type="Datetime" name="from" onChange={this.onChange} value={this.state.from} required/>
        </p>
        <p className = 'tc'>
        <label className='red'>To </label>
         <input type="Datetime" name="to" onChange={this.onChange} value={this.state.to} required/>
        </p>
        <p className="full b f4  tc  ">
                     <span className = 'tc'> 
                     {this.renderRedirect()}
                     <button className = 'tc but' type="submit" onClick={this.setRedirect} onSubmit={this.handleSubmitReserve}>Reserve</button>
                      </span>
         </p>
                 </form>

      </div>
    )
  }
}

Room.propTypes ={
  R:PropTypes.object.isRequired
}

export default Room
// redirectFunction() {
    //   this.handleSubmit()
    //   router.push({
    //    to: '/booking/search',
    //    query: this.state.filters
    //   })
    //  }
     
    //  render () {
    //    <div 
    //     className="btn btn-secondary btn-width-200 search-submit" 
    //     onClick={this.redirectFunction.bind(this)}>
    //       Search 
    //    </div>
    //  }

    {/* <NavLink to="/contact">Contact</NavLink> */}
//2019-10-12T12:00:00
//2019-10-12T1:00:00