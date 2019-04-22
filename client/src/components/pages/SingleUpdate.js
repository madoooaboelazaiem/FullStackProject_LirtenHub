import React from 'react';
import axios from 'axios';
import AcceptorDeclineSkill from './AcceptorDeclineSkill';
import ApplySkill from './ApplySkill';
import UpdateAcceptorReject from './UpdateAcceptorReject';
class SingleUpdate extends React.Component {
  state={
    updates:[]
  }
  componentDidMount() {

  axios.get('https://lirtenhub-nav2.herokuapp.com/api/users/pending/update')

.then(res => {       

const P2 = res.data.data;     

console.log(res)
console.log(P2)    

this.setState({updates:P2})  


})
  

   }
     
  
  render() {
    return this.state.updates.map((P2)=>(
      <UpdateAcceptorReject P2={P2}/>    
    ));
  }
}

export default SingleUpdate;