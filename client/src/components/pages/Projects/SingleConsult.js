import React from 'react';
import axios from 'axios';
import ApproveOrDeclineConsult from './ApproveOrDeclineConsult';
class SingleConsult extends React.Component {
  state={
    appliedconsult:[],
    pid:null
  }
  componentDidMount() {

      this.setState({appliedconsult:this.props.location.state.P})
      this.setState({pid:this.props.location.state.pid})   
 }
     
  
  render() {
    if(this.state.pid!=null)
    return this.state.appliedconsult.map((P2)=>(
      <ApproveOrDeclineConsult P2={P2} P3={this.state.pid}/>    
    ) 
    )
    return null
  }
}

export default SingleConsult;