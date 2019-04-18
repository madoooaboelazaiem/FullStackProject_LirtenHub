import React from 'react';
import Cards from '../AcceptorRejectReservation'
import axios from 'axios';
class Reservations extends React.Component {
  state={
    Reservations:[]
  }
  componentDidMount() {//https://lirtenhub-nav2.herokuapp.com/api/reservations/confirmed/notYet
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/reservations/`)
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