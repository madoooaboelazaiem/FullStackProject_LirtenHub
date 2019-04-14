import React from 'react';
import Project from './pages/Project.js'
import axios from 'axios';
class All_Projects extends React.Component {
  state={
    Projects:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-nav2.herokuapp.com/api/projects`)
      .then(res => {
        const P = res.data.data;
        console.log(P)
        this.setState({Projects:P });
        
      }) 
     
     
  }
  
  

  render() {
    return this.state.Projects.map((P)=>(
      <Project P={P} />    
    ));
  }
}

export default All_Projects;
