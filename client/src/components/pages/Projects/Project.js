import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Projects.css';
import Single_Project from './Single_Project.js'
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


 class Project extends Component {
   state={

     X:this.props.P,
     Y:this.props.P._id,
     redirect:false
   }

   clicked=()=>{
     this.setState({redirect:true})
   }
   handle=()=>{
     if(this.state.redirect==true){
       return <Redirect to={'/SingleProject/'+this.state.Y}/>
     }
   }
   
  
  render() {
    return (//P is Actullay the Project Info itself
      
      <div className = "tt" onClick={this.clicked}> 
      {this.handle()} 
      <h3 className="tt2">
      <br></br>  
        {this.props.P.name}
        <br></br>  
        {this.props.P.description}</h3>  
        <br></br>
         
          
     </div>
    )
  
  }
  
   
}

Project.propTypes ={
  P:PropTypes.object.isRequired
}

export default Project
