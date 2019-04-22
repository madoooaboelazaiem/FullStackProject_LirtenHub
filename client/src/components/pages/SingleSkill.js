import React from 'react';
import axios from 'axios';
import AcceptorDeclineSkill from './AcceptorDeclineSkill';
import ApplySkill from './ApplySkill';
class SingleSkill extends React.Component {
  state={
    skills:[]
  }
  componentDidMount() {

  axios.get('http://localhost:3000/api/skills')

.then(res => {       

const P2 = res.data.skill;     


console.log(P2)    
console.log("3amel ehhh")
this.setState({skills:P2})  


})
  

   }
     
  
  render() {
    return this.state.skills.map((P2)=>(
      <ApplySkill P2={P2}/>    
    ));
  }
}

export default SingleSkill;