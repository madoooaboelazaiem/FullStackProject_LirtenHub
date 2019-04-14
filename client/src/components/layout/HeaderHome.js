import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'
import { Link,Route, BrowserRouter as Router ,browserHistory,Switch } from 'react-router-dom'

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
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="/">Logout</a>
            <a  onclick={this.handle} >My profile</a>
          </div>
        </div>
        )}
}
export default Header