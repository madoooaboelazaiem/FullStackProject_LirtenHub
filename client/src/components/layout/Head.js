import React, {Component} from 'react'
import 'tachyons' 
import { Link,Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
import { connect } from "react-redux";
import Profile from "../pages/Profile"
class Head extends Component{
render(){
  const {isLoggedIn,loggedUser,users} = this.props;
  const x = this.props.loggedUser
  console.log(this.props.loggedUser)
    return(
        <div>
              <header className="bg-light-blue black-80 tc pv4 avenir">
                  <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
                  </a>
                  <h1 className="mt2 mb0 baskerville i fw1 f1">LirtenHub</h1>
                  <h2 className="mt2 mb0 f6 fw4 ttu tracked">From Zero to Hero </h2>
                  <nav className="bt bb tc mw7 center mt4">
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/HomePage">Home</a>
                    <div className="dropdown">
                        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" >Projects</a>
                        <div className="dropdown-content bg-light-green ">
                          <a href="/Projects">All Projects</a>
                          <Link  to={"/Profile/"+x.id} >My profile</Link>
                          <h3>{console.log("hello "+x.id)}</h3>
                          <a href="Project_Requests">Project Requests</a>
                        </div>
                      </div>
                      
                
                    <div className="dropdown">
                      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" >Locations</a>
                      <div className="dropdown-content bg-light-pink ">
                        <a href="/Locations">All Locations</a>
                      </div>
                    </div>
                
                   <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/Calender">Calender</a>
                  </nav>
                </header>
         
          </div>
    )
}
}
function mapStateToProps(state) {
  // console.log(state.authentication.loggedUser)
   
   const { isLoggedIn,loggedUser } = state.authentication;
  const {users} = state.users
   return { isLoggedIn,loggedUser,users };
 }
 export default connect(mapStateToProps)(Head);