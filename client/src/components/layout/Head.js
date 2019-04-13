import React, {Component} from 'react'
import 'tachyons' 


class Head extends Component{
render(){
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
                          <a href="Project_Requests">Project Requests</a>
                        </div>
                      </div>
                      
                
                    <div className="dropdown">
                      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" >Locations</a>
                      <div className="dropdown-content bg-light-pink ">
                        <a href="/Locations">All Locations</a>
                        <a href="/Locations">Locations</a>
                        <a href="/AddLocations">Add Locations</a>
                        <a href="/EditLocations">Edit Locations</a>
                        <a href="/AddRoom">Add Room</a>
                        <a href="/EditRoom">Edit Room</a>
                      </div>
                    </div>
                
                   <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/Calender">Calender</a>
                  </nav>
                </header>
         
          </div>
    )
}
}
export default Head