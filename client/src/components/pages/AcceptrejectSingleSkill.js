import React from 'react';
import axios from 'axios';
import AcceptorDeclineSkill from './AcceptorDeclineSkill';
import ApplySkill from './ApplySkill';
class AcceptrejectSingleSkill extends React.Component {
 
  state={
    skills:[]
  }
  componentDidMount() {

  axios.get('https://lirtenhub-nav2.herokuapp.com/api/users/pending/Skill')

.then(res => {       

const P2 = res.data.Data;     


console.log(P2)    
console.log("3amel ehhh")
this.setState({skills:P2})  


})
  

   }
     
  
  render() {
    const skill = this.state.skills
    return skill.map((P2)=>(
      <AcceptorDeclineSkill P2={P2}/>    
    ));
  }
}

export default AcceptrejectSingleSkill;
