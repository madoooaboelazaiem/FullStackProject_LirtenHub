import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Single_Project.css';
import axios from 'axios';

 class Single_Project extends Component {
  constructor(props) {
    super(props);
  }
  state={ 
    id:"",
    name:"",
    status:"",
    approved:"",
    description:"",
    price:"",
    Payment_Type:"",
    partner_id:"",
    need_Consultancy:"",
    consultancy_agency_id:"",
    current_cons_applied_ids:[],
    members_needed:"",
    current_members_count:"",
    current_members_applied_ids:[],
    accepted_members_ids:[],
    main_skill:"",
    extra_skills:[],
    extra_attributes:[],
    Expected_Duration:"",
    Start_Date:"",
    End_Date:"",
    least_exp_level_needed:"",
    comitment_level_needed:"",
    tasks:[]
  }
   componentDidMount() {
    const asdas='https://lirtenhub-nav2.herokuapp.com/api/projects/'+(this.props.match.params.id)
    //const asdas='localhost:3000/api/projects/'+(this.props.match.params.id)
    console.log(asdas) 
    axios.get(asdas)
      .then(res => {       
        const P = res.data.data;
        this.setState({id:P._id  ,name:P.name,
        status:P.status,
       approved:P.approved,
        description:P.description,
        price:P.price,
        Payment_Type:P.Payment_Type,
        partner_id:P.partner_id,
        need_Consultancy:P.need_Consultancy,
        consultancy_agency_id:P.consultancy_agency_id,
        current_cons_applied_ids:P.current_cons_applied_ids,
        members_needed:P.members_needed,
        current_members_count:P.current_members_count,
       current_members_applied_ids:P.current_members_applied_ids,
        accepted_members_ids:P.accepted_members_ids,
        main_skill:P.main_skill,
        extra_skills:P.extra_skills,
        extra_attributes:P.extra_attributes,
        Expected_Duration:P.Expected_Duration,
        Start_Date:P.Start_Date,
        End_Date:P.End_Date,
        least_exp_level_needed:P.least_exp_level_needed,
        comitment_level_needed:P.comitment_level_needed,
       tasks:P.tasks});
      }) 
     
     
  }
  
  render() {
    console.log(this.state)
    return (
      <div>  
      <span2><h1 >{this.state.name}</h1></span2>    
      <p>{this.state.description}</p>
      <h2><span>Status :</span> {this.state.status}</h2>
      <h1 className="req">Requirments</h1> 
      </div>
      


    )
  }
}

//<h2><span>Descriprtion</span></h2>

export default Single_Project
