import React, { Component } from 'react'
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'
import { connect } from "react-redux";
import './HomePage.css'
import 'tachyons'
 class HomePage extends Component {
   
  
  render() {
    const {isLoggedIn,loggedUser,users} = this.props;
    const x = loggedUser.User_Category
    if(x.User_Category=="Admin"){

    return(
      <div className = 'haw'>
                <nav className="bt hover-bg-light-gray tc mw7 center mt4">
                  <div className="dropdown"> 
                      <a className="f6 f5-l link bg-animate black-80 hover-bg-green dib pa3 ph4-l" >Projects</a>
                      <div className="dropdown-content bg-light-green ">
                        <Link to="/Projects/">All Projects</ Link>
                        <Link to="/approvedP/">Approved Projects</ Link>
                        <Link to="/notapprovedP/">Not Approved Projects</ Link>
                        <Link to="/Project_Requests">Project Requests</Link>
                        <Link to="/SingleConsult">AcceptOrReject Consultancy Agency</Link>
                      </div>
                    </div>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" >Test Remove dropdowns if not neede ... 
                    ps remove homepage if not needed
                    </Link>

                    
              
                  <div className="dropdown">
                    <a className="f6 f5-l link bg-animate black-80 hover-bg-gray dib pa3 ph4-l" >Locations</a>
                    <div className="dropdown-content bg-beige ">
                      <a href="/#">s</a>
                      <a href="/#">2</a>
                      <a href="/#">Cancel Reservation</a>
                      <a href="/#">Add Locations</a>
                      <a href="/#">Add Room</a>
                      <a href="/#">Edit Room</a>
                    </div>
                  </div>
              


                 
                 <div className="dropdown"></div>      


                </nav>

                
       
        </div>
  )}
  else if(x.User_Category=="Partner"){
    return(
      <div className = 'haw'>
      <nav className="bt hover-bg-light-gray tc mw7 center mt4">
        <div className="dropdown"> 
            <a className="f6 f5-l link bg-animate black-80 hover-bg-green dib pa3 ph4-l" >Projects</a>
            <div className="dropdown-content bg-light-green ">
              <Link to="/Projects/">All Projects</ Link>
              <Link to="/approvedP/">Approved Projects</ Link>
              <Link to="/notapprovedP/">Not Approved Projects</ Link>
              <Link to="/Project_Requests">Project Requests</Link>
              <Link to="/SingleConsult">AcceptOrReject Consultancy Agency</Link>
              <Link to='/NewProject'>New Project</Link>
              <Link to='/myap'>applied projects</Link>
            </div>
          </div>
          

          
    
        <div className="dropdown">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-gray dib pa3 ph4-l" >Locations</a>
          <div className="dropdown-content bg-beige ">
            <a href="/#">s</a>
            <a href="/#">2</a>
            <a href="/#">Cancel Reservation</a>
            <a href="/#">Add Locations</a>
            <a href="/#">Add Room</a>
            <a href="/#">Edit Room</a>
          </div>
        </div>
    


       
       <div className="dropdown"></div>      


      </nav>

      

</div>
    )}
    else if(x.User_Category=="Consulting_Agent"){
      return(
        <div className = 'haw'>
        <nav className="bt hover-bg-light-gray tc mw7 center mt4">
          <div className="dropdown"> 
              <a className="f6 f5-l link bg-animate black-80 hover-bg-green dib pa3 ph4-l" >Projects</a>
              <div className="dropdown-content bg-light-green ">
                <Link to="/Projects/">All Projects</ Link>
                <Link to="/approvedP/">Approved Projects</ Link>
                <Link to="/notapprovedP/">Not Approved Projects</ Link>
                <Link to="/Project_Requests">Project Requests</Link>
                <Link to='/conneed'>need consulacy</Link>
                <Link to='/myap'>applied projects</Link>
              </div>
            </div>
            <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" >Test Remove dropdowns if not neede ... 
            ps remove homepage if not needed
            </Link>

            
      
          <div className="dropdown">
            <a className="f6 f5-l link bg-animate black-80 hover-bg-gray dib pa3 ph4-l" >Locations</a>
            <div className="dropdown-content bg-beige ">
              <a href="/#">s</a>
              <a href="/#">2</a>
              <a href="/#">Cancel Reservation</a>
              <a href="/#">Add Locations</a>
              <a href="/#">Add Room</a>
              <a href="/#">Edit Room</a>
            </div>
          </div>
      


         
         <div className="dropdown"></div>      


        </nav>

        

</div>
      )}
else{
          return(
            <div className = 'haw'>
            <nav className="bt hover-bg-light-gray tc mw7 center mt4">
              <div className="dropdown"> 
                  <a className="f6 f5-l link bg-animate black-80 hover-bg-green dib pa3 ph4-l" >Projects</a>
                  <div className="dropdown-content bg-light-green ">
                    <Link to="/Projects/">All Projects</ Link>
                    <Link to="/approvedP/">Approved Projects</ Link>
                    <Link to="/notapprovedP/">Not Approved Projects</ Link>
                    <Link to="/Project_Requests">Project Requests</Link>
                    <Link to="/SingleConsult">AcceptOrReject Consultancy Agency</Link>
                  </div>
                </div>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" >Test Remove dropdowns if not neede ... 
                ps remove homepage if not needed
                </Link>

                
          
              <div className="dropdown">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-gray dib pa3 ph4-l" >Locations</a>
                <div className="dropdown-content bg-beige ">
                  <a href="/#">s</a>
                  <a href="/#">2</a>
                  <a href="/#">Cancel Reservation</a>
                  <a href="/#">Add Locations</a>
                  <a href="/#">Add Room</a>
                  <a href="/#">Edit Room</a>
                </div>
              </div>
          


             
             <div className="dropdown"></div>      


            </nav>

            
   
    </div>
        ) 

  }
    }   
  }
function mapStateToProps(state) {
  console.log(state.authentication.loggedUser)
  
  const { isLoggedIn,loggedUser } = state.authentication;
 const {users} = state.users
  return { isLoggedIn,loggedUser,users };
}
  

export default connect(mapStateToProps) (HomePage)