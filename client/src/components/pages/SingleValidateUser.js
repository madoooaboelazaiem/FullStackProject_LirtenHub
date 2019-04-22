import React from 'react';
import axios from 'axios';
import AcceptorDeclineSkill from './AcceptorDeclineSkill';
import ApplySkill from './ApplySkill';
import ValidateUser from './ValidateUser';
import { Link,Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
import { connect } from "react-redux";
class SingleValidateUser extends React.Component {
  state={
    skills:[]
  }
  componentDidMount() {

axios({
    method: 'get',
    url: 'https://lirtenhub-nav2.herokuapp.com/api/users/valid/notyet',
    data: {

      User_Category:this.props.loggedUser.User_Category
    }
  }).then(res => {
    const P2 = res.data.Data;
    console.log(P2);
    //console.log(this.state.skills);
    this.setState({skills:P2})      
    

  })
  .catch(function (error) {
      alert(error.response.data.error)
    console.log(error);
  });
  

   }
     
  
  render() {
    return this.state.skills.map((P2)=>(
      <ValidateUser P2={P2}/>    
    ));
  }
}
function mapStateToProps(state) {
    console.log(state.authentication.loggedUser)
    
    const { isLoggedIn,loggedUser } = state.authentication;
   const {users} = state.users
    return { isLoggedIn,loggedUser,users };
  }
export default connect(mapStateToProps)(SingleValidateUser);