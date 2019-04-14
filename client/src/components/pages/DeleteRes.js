import React from 'react';
import DelCards from '../DeleteReservations'
import axios from 'axios';
class DelRes extends React.Component {
  state={
    dele:[]
  }
  componentDidMount() {//https://lirtenhub-nav2.herokuapp.com/api/reservations/confirmed/notYet
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/reservations/`)
      .then(res => {
        const dele = res.data.data;
        this.setState({dele:dele });
      })  
     
  }
  render() {
    return this.state.dele.map((dele)=>(
      <DelCards dele={dele}/>    
    ));
  }
}

export default DelRes;
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