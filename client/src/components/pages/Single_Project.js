import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

 class Single_Project extends Component {
   state={
    P:null
    
   }
   componentDidMount() {
    const asdas='https://lirtenhub-na.herokuapp.com/api/Projects/'+(this.props.match.params.id)
    axios.get(asdas)
      .then(res => {       
        const P = res.data.data;
        this.setState({P:P });
        console.log(this.state.P)
      }) 
     
     
  }
  
  render() {
    //console.log(this.props.match.params)
    
    return (
      
      <div className = "tt"> 
    
      this.state.P
     </div>
    )
  }
}

Single_Project.propTypes ={
  P:PropTypes.object.isRequired
}

export default Single_Project
