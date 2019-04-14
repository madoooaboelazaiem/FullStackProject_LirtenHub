import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Single_Project.css';
import axios from 'axios';
import { connect } from "react-redux";
import { addResult } from '@jest/test-result';
function mapStateToProps(state) {
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
 class Single_Project extends Component {
  constructor(props) {
    super(props);
  }
  state={ 
   P:null,
   U:null,
   skills:[]
  }
   componentDidMount() {
    // axios.get('https://lirtenhub-nav2.herokuapp.com/api/users/'+(this.props.loggedUser.id))
    //   .then(res => {       
    //     const P = res.data.Data;       
    //     this.setState({U:P});      
    //   })
    const result=[]
    const asdas='https://lirtenhub-nav2.herokuapp.com/api/projects/'+(this.props.match.params.id)
    //const asdas='localhost:3000/api/projects/'+(this.props.match.params.id)
    axios.get(asdas)
      .then(res => {       
        const P = res.data.data;
        this.setState({P:P});     
      axios.get('https://lirtenhub-nav2.herokuapp.com/api/skills/'+(this.state.P.main_skill))
      .then(res => {       
        const P1 = res.data.X;      
        result.push(P1.Name);            
      for(let i=0;i<this.state.P.extra_skills.length;i++){
          axios.get('https://lirtenhub-nav2.herokuapp.com/api/skills/'+(this.state.P.extra_skills[i]))
       .then(res => {       
        const P2 = res.data.X;     
       result.push(P2.Name);
       this.setState({skills:result}) 
           
       })
      }
      
      
    })    
      
  })
    
  
  }
  
  render() {  
    
    if(this.state.P==null||this.state.skills==[]){
      return <h1>loading</h1>
    
    }
  else{
    console.log(this.state.skills)
    return (    
      <div>     
      <span2><h1 >{this.state.P.name}</h1></span2>    
      <p>{this.state.P.description}</p>
      <h2><span>Status :</span> {this.state.P.status}</h2>
      <h1 className="Owner"><span>Owner : </span>{"Mahmoud Basha Ahmed"}</h1>
      <h1 className="req">Requirments :</h1> 
      
        <h2 className="MN">Members Needed : {this.state.P.current_members_count+"/"+this.state.P.members_needed}
        <br></br>
        {"Experience Needed : "+this.state.P.least_exp_level_needed}  
        <br></br>
        {"Commitment Level : "+this.state.P.commitment_level_needed}
        </h2>
        <h1 className="hello">Required Skills : </h1>
        {this.state.skills.map((S)=>(
          <h1 className="skills">{S}</h1>
            ))
        }
        <h1 className="hello">technicalities : </h1>
        <h1 className="skills">{"Compensation : "+this.state.P.price}</h1>
        <h1 className="skills">{"Payment Type : "+this.state.P.Payment_Type}</h1>
        
        {this.state.P.extra_attributes.map((K)=>(
          <h1 className="skills">{K}</h1>
        ))
        }
        
    
      
      
      
      </div>
      


    )
    
  }
}
}

//<h2><span>Descriprtion</span></h2>


export default connect(mapStateToProps)( Single_Project)
