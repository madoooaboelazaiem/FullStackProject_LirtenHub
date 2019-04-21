import React, { Component } from 'react'
import './Single_Project.css';
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
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
    ccap:[],
    am1:[],
    ami:[],
    skills:[],
    tasks:[],
    partner:null,
    cons:null,
    R:false
  }
    componentDidMount() {
    
      axios.get(`http://localhost:3000/api/Projects/`+this.props.match.params.id)
      .then(res => {
        this.setState({ccap:res.P});
        this.setState({P:res.P});
        this.setState({P:res.P});
        this.setState({P:res.P});
        this.setState({P:res.P});
        this.setState({P:res.P});
        this.setState({P:res.P});
        
      }) .catch(err => this.setState({R:true}))
       
    
  
    
    
  }
  
  render() { 
    
    if(this.state.R==true){
      return <Redirect to='/'/>
    }
    
    else if(this.state.P==null){
      return <div className="loader center" id="page-content-wrapper"></div>

    
    }
  else{
    console.log(this.state.P.skills[0].Name)  
    return (
      
      <div id="page-content-wrapper">     
      <span2><h1 >{this.state.P.name}</h1></span2>    
      <p>{this.state.P.description}</p>
      <h2><span>Status :</span> {this.state.P.status}</h2>
      <h1 className="Owner"><span>Owner : </span>{this.state.P.P.partner_id.Join_Date+" "+this.state.P.P.partner_id.Last_Name}</h1>
      <h1 className='hello'><span>Expected Duration : </span>{this.state.P.P.Expected_Duration}</h1>
      <h1 className='hello'><span>Working Started on : </span>{this.state.P.P.Start_Date}</h1>
      <h1 className='hello'><span>Work Ended On : </span>{this.state.P.P.End_Date}</h1>
      <h1 className="req">Tasks : </h1>
      <h1 className="req">Requirments :</h1> 
      
        <h2 className="MN">Members Needed : {this.state.P.P.current_members_count+"/"+this.state.P.P.members_needed}
        <br></br>
        {"Experience Needed : "+this.state.P.P.least_exp_level_needed}  
        <br></br>
        {"Commitment Level : "+this.state.P.P.comitment_level_needed}
        </h2>
        <h1 className="hello">Required Skills : </h1>
        <h1 className="skills"  >{this.state.P.P.main_skil}</h1>
        {this.state.P.skills.map((S)=>(
         
          <h1 className="skills"  >{S.Name}</h1>
          
            ))
        }
        <h1 className="hello">technicalities : </h1>
        <h1 className="skills">{"Compensation : "+this.state.P.price}</h1>
        <h1 className="skills">{"Payment Type : "+this.state.P.Payment_Type}</h1>
        
        {this.state.P.P.extra_attributes.map((K)=>(
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
