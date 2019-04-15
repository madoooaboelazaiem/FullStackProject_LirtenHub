import React from 'react';
import Room from './pages/Room'
import axios from 'axios';
import 'tachyons'

class Rooms extends React.Component {
  state={
    rooms:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/rooms/`)
      .then(res => {
        const R = res.data.data;
        this.setState({rooms:R });
        
      })  
     
  }
  render() {
    
    return (
      <React.Fragment>
  <h2 className = 'tc red'>Click on the Desired Room you want to Edit</h2>

        {this.state.rooms.map((R)=>(
      <Room R={R}/>    
    ))}
    </React.Fragment>

  
    )
  }
}

export default Rooms;
