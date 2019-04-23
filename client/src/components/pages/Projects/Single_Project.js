import React, { Component } from 'react'
import './Single_Project.css';
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import editp from './EditProject.js'
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
    cami:[],
    ami:[],
    skills:[],
    tasks:[],
    partner:null,
    cons:null,
    R:false,
    done:false,
    redirectP:false,
    redirectedit:false,
    redirectcons:false,
    redirecttask:false,
  }
    componentDidMount() {
      const link=`https://lirtenhub-nav2.herokuapp.com/api/projects/`+this.props.match.params.id
      axios.get(link)
      .then(res => {
        this.setState({P:res.data.data.P});
        this.setState({ccap:res.data.data.ccap});
        this.setState({cmai:res.data.data.cmaii});
        this.setState({ami:res.data.data.ami});
        this.setState({skills:res.data.data.skills});
        this.setState({tasks:res.data.data.tasks});
        this.setState({partner:res.data.data.partner});
        this.setState({cons:res.data.data.cons});
        if(this.state.P.Start_Date==null||this.state.P.Start_Date==undefined){
          this.state.P.Start_Date="not yet"
        }
        else{
          this.state.P.Start_Date=this.state.P.Start_Date.substring(0,10)
          
        }
        
        if(this.state.P.End_Date==null||this.state.P.End_Date==undefined){
          this.state.P.End_Date="not yet"
        } 
        else{
          this.state.P.End_Date=this.state.P.End_Date.substring(0,10)
          
        }
        this.setState({done:true});      
      }).catch(err => console.log(err))  
  }
  addtask(){
    this.setState({redirecttask:true})
  }
  viewcons(){
    this.setState({redirectcons:true})
  }

  edit(){
    this.setState({redirectEdit:true})
  }

  adminapprove(){
    axios.put(`https://lirtenhub-nav2.herokuapp.com/api/projects/approved/`+this.props.match.params.id,{"approved":true}).then(res=>{
      
    }).catch(err=>console.log(err))
  }
  consapply(){
    axios.put(`https://lirtenhub-nav2.herokuapp.com/api/projects/consapply/`+this.props.match.params.id).then(res=>{
      
    }).catch(err=>console.log(err))
  }

  clickedP=()=>{
    this.setState({redirectP:true})
  }
  handleP=()=>{
    if(this.state.redirectP==true){
      return <Redirect to={'/profile/'+this.state.partner._id}/>
    }
  }
  helperc=()=>{
    if(this.state.cons!=null){
      return <div><h2 className="h2s"><span className="span1">Consultancy Agency : </span><Link className="h2s"to={"/profile/"+this.state.cons._id}>{this.state.cons.Name}</Link></h2></div>
    }
      else
      return <div></div>
  
  }

  viewconsbtn=()=>{
    if(this.state.cons==null&&this.state.P.need_Consultancy&&(this.props.loggedUser.id==this.state.partner._id||this.props.loggedUser.User_Category=="Admin")){
      return <div><button className="appbutton"onClick={(e)=>this.viewcons(e)}>Consultancy Agencies Applied</button></div>
    }
    else return<div></div>
  }
  addtaskbtn=()=>{
    if((this.state.cons!=null&&this.state.cons._id==this.props.loggedUser.id)||(this.props.loggedUser.id==this.state.partner._id||this.props.loggedUser.User_Category=="Admin")){
      return <div><button className="appbutton"onClick={(e)=>this.addtask(e)}>Add Task</button></div>
    }
    else return<div></div>
  }

editbtn=()=>{
  if((this.state.P.status=='Allocation'||this.state.P.status=='Implementation'||this.state.P.status=='Completed')&& this.props.loggedUser.User_Category!="Admin"){
    return <div></div>
  }
  else{
    if(this.props.loggedUser.id==this.state.partner._id||(this.state.cons!=null&&this.props.loggedUser.id==this.state.cons._id)||this.props.loggedUser.User_Category=="Admin")
      return <div><button className="appbutton1" onClick={(e)=>this.edit(e)}>Edit</button></div>
  }
  return <div></div>
}

  Approvebtn=()=>{
    if((this.state.P.approved==null||this.state.approved==false)&&this.props.loggedUser.User_Category=="Admin"){
      return <div><button className="appbutton"onClick={(e)=>this.adminapprove(e)}>Approve</button></div>
    }
    else return<div></div>
  }
  consapplybtn=()=>{
    if((this.state.P.need_Consultancy==true&&this.state.cons==null)&&this.props.loggedUser.User_Category=="Consulting_Agent"){
      for(let i=0;i<this.state.ccap.length;i++)
        if(this.state.ccap[i]._id==this.props.loggedUser.id)
          return <div></div>
      
      return <div><button className="appbutton"onClick={(e)=>this.consapply(e)}>Apply</button></div>
    }
    else return<div></div>
  }
  render() { 
    
    if(this.state.R==true){
      return <Redirect to='/'/>
    }
    
    else if(this.state.done==false){
      return <div className="loader center" ></div>}
    else if(this.state.redirectEdit==true){
      return <Redirect to={{pathname:'/EditProject/',state:{P:this.state.P}}}/>}
    else if(this.state.redirectcons==true)
      return <Redirect to={{pathname:'/SingleConsult/',state:{P:this.state.ccap,pid:this.state.P._id}}}/>
    else if(this.state.redirecttask==true)
      return <Redirect to={{pathname:'/NewTask/',state:{P:this.state.P}}}/>
    else{
      
    return (
      
      <div>  
        <br>
        </br>  
        <div> 
      <h1 className="PName">{this.state.P.name} </h1> 
      {this.Approvebtn()}
      {this.consapplybtn()}
      {this.editbtn()}
      {this.viewconsbtn()}
      {this.addtaskbtn()}
       </div>
      <p className="d1">{this.state.P.description}</p>
      <h2 className="h2s"><span className="span1">Status :</span> {this.state.P.status}</h2>
      <br></br>
      <div className="clickedcursor "onClick={this.clickedP}>
      {this.handleP()}
      <h2 className="h2s"><span className="span1">Owner : </span>{this.state.partner.First_Name+" "+this.state.partner.Last_Name}</h2>
      </div>
      <br></br>
      {this.helperc()}
      <h2 className='hello'><span className="span1">Expected Duration : </span>{this.state.P.Expected_Duration}</h2>
      <br></br>
      <h2 className='hello'><span className="span1">Working Started on : </span>{this.state.P.Start_Date}</h2>
      <br></br>
      <h2 className='hello'><span className="span1">Work Ended On : </span>{this.state.P.End_Date}</h2>
      <br></br>
      <h2 className="h2s"> <span className="span1">Tasks :</span>{ }</h2>
      <br></br>
      {this.state.tasks.map(function(T,index){
        return (<div className="divider">
        <Link className="task">{T.name}</Link>
        
        </div>)
      }
      )}
      <br></br>
      <br></br>
      <h2 className="h2s"> <span className="span1">Requirments :</span>{ }</h2>
      <br></br>
      
        <h4 className="sadasd">Members Needed : {this.state.P.current_members_count+"/"+this.state.P.members_needed}</h4>
        <br></br>
        <h4 className="sadasd">{"Experience Needed : "+this.state.P.least_exp_level_needed}  </h4>
        <br></br>
        <h4 className="sadasd">{"Commitment Level : "+this.state.P.comitment_level_needed}</h4>
        <br></br>
        <h2 className="h2s"> <span className="span1">Required Skills: :</span>{ }</h2>
        <br></br>
        {this.state.skills.map((S)=>(
            <h4 className="sadasd"  >{S.Name}</h4>       
            ))
        }
        <br></br>
        <h2 className="h2s"><span className="span1">Technicalities :</span> </h2>
        <h4 className="sadasd">{"Compensation : "+this.state.P.price}</h4>
        <h4 className="sadasd">{"Payment Type : "+this.state.P.Payment_Type}</h4>
        
        {this.state.P.extra_attributes.map((K)=>(
          <h4 className="sadasd">{K}</h4>
        ))
        }
        
        
    
      
      
      
      </div>
      


    )
    
  }
  }
}


//<h2><span>Descriprtion</span></h2>


export default connect(mapStateToProps)( Single_Project)
