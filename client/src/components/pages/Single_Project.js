import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Single_Project.css';
import axios from 'axios';
import { connect } from "react-redux";
function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
 class Single_Project extends Component {
  constructor(props) {
    super(props);
  }
  state={ 
   P:null
  }
   componentDidMount() {
    const asdas='https://lirtenhub-nav2.herokuapp.com/api/projects/'+(this.props.match.params.id)
    //const asdas='localhost:3000/api/projects/'+(this.props.match.params.id)
    console.log(asdas) 
    axios.get(asdas)
      .then(res => {       
        const P = res.data.data;
        this.setState({P:P});
      })    
  }
  
  render() {  
    if(this.state.P==null){
      return <h1>loading</h1>
    
    }
  else{
    return (    
      <div>     
      <span2><h1 >{this.state.P.name}</h1></span2>    
      <p>{this.state.P.description}</p>
      <h2><span>Status :</span> {this.state.P.status}</h2>
      <h1 className="req">Requirments :</h1> 
      
        <h2 className="MN">Members Needed : {this.state.P.members_needed}
        <br></br>
        {"Experience Needed : "+this.state.P.least_exp_level_needed}
        <br></br>
        {"Commitment Level : "+this.state.P.commitment_level_needed}
        </h2>
      
      
      
      </div>
      


    )
    
  }
}
}

//<h2><span>Descriprtion</span></h2>


export default connect(mapStateToProps)( Single_Project)
