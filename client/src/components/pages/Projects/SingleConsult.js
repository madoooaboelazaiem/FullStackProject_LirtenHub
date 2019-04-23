import React from 'react';
import axios from 'axios';
import ApproveOrDeclineConsult from './ApproveOrDeclineConsult';
class SingleConsult extends React.Component {
  state={
    appliedconsult:[]

  }
  componentDidMount() {

  axios.get('https://lirtenhub-nav2.herokuapp.com/api/projects/5ca9fc186d942f1eb821d7e9')

.then(res => {       

const P2 = res.data.data.ccap;     
console.log(res)
console.log(P2)    

this.setState({appliedconsult:P2})  


})
  

   }
     
  
  render() {
    return this.state.appliedconsult.map((P2)=>(
      <ApproveOrDeclineConsult P2={P2}/>    
    ) 
    )
    
  }
}

export default SingleConsult;