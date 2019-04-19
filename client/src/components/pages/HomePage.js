import React, { Component } from 'react'
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'


 class HomePage extends Component {
   
  
  render() {
    
    return (
      <div> 
      <h1>Hello Testing 123</h1> 
      <Link to={"/projects"}>All Projects</Link>
        
             
     </div>
    )
  
    }
}
export default HomePage