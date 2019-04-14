import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'
import {createHashHistory}from "history"
class Header extends Component{

handle(e){
  const history = createHashHistory()
  
}

    render(){
        return(
        <div className="header">
          <a href="#default" className="logo">LirtenHub</a>
          <div className="header-right">
            <a className="active" href="/home">Home</a>
<<<<<<< HEAD
            <a href="#">About</a>
            <a href="/">Logout</a>
=======
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a  onclick={this.handle} >My profile</a>
>>>>>>> 3637f4af411fe141f3613b9d45013b8bd8a17b55
          </div>
        </div>
        )}
}
export default Header