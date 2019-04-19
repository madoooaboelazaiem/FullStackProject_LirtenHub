import React from 'react';
import LocationRoom from './pages/LocationRoom'
import axios from 'axios';
import 'tachyons'

class All_Locations extends React.Component {
  state={
    locations:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhubtest.herokuapp.com/api/Locations/`)
      .then(res => {
        const L = res.data.data;
        this.setState({locations:L });
        
      })  
     
  }
  render() {
    
    return (
      <React.Fragment>
             <h1 className = "tc red">Choose The Desired Location</h1>

        {this.state.locations.map((L)=>(
      <LocationRoom L={L}/>    
    ))}
    </React.Fragment>

  
    )
  }
}

export default All_Locations;
