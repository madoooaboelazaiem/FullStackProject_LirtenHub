import React from 'react';
import Reserve from './pages/Reserve'
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
  <h2 className = 'tc red'>Choose a corresponding date to the room you wish to reserve</h2>
  <p className = "tc ">
        <label className='red '> {"Date Format : <YYYY-mm-ddTHH:MM:ss>"} </label>
        </p>
        {this.state.rooms.map((R)=>(
      <Reserve R={R}/>    
    ))}
    </React.Fragment>

  
    )
  }
}

export default Rooms;
{/* <NavLink to="/contact">Contact</NavLink> */}
