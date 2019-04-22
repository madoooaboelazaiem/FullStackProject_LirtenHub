import React from 'react';
import DelCards from '../DeleteReservations'
import axios from 'axios';
class DelRes extends React.Component {
  state={
    dele:[],
    error:null
  }
  componentDidMount() {//https://lirtenhub-nav2.herokuapp.com/api/reservations/client/res  the reservations of client
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/reservations/`)
      .then(res => {
        const dele = res.data.data;
        this.setState({dele:dele });
      }).catch(err=>{
        console.log(err)
        this.setState({error: true})
      }).then(res => {
        if(this.state.error){
          alert('There was a problem Retreiving the reservations please try again later')
          this.setState({error:false})
          window.location.href = "/"

        }
       
      })    
     
  }
  render() {
    return( 
      <div>
        <h1 className = 'regReq'>Cancel Reservations</h1>
      {this.state.dele.map((dele)=>(
      <DelCards dele={dele}/>
    ))}
          </div>   

    );
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