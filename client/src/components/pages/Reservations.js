import React from 'react';
import Cards from '../AcceptorRejectReservation'
import axios from 'axios';
class Reservations extends React.Component {
  state={
    Reservations:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/reservations`)
      .then(res => {
        const reserv = res.data.data;
        this.setState({Reservations:reserv });
      })  
     
  }
  render() {
    return this.state.Reservations.map((reserv)=>(
      <Cards reserv={reserv}/>    
    ));
  }
}

export default Reservations;
