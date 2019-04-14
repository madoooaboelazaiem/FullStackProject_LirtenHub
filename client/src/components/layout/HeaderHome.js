import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'
import {createHashHistory}from "history"
import { Link,Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
class Header extends Component{
  constructor(props) {
    super(props);
  }


    render(){
  
        return(
        <div className="header">
          <a href="#default" className="logo">LirtenHub</a>
          <div className="header-right">
            <a className="active" href="/home">Home</a>
            <a href="#about">About</a>
          
          
          
            <h3></h3>
          </div>
        </div>
        )}
}
export default Header