import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'

class Header extends Component{
    render(){
        return(
        <div className="header">
          <a href="#default" className="logo">LirtenHub</a>
          <div className="header-right">
            <a className="active" href="/home">Home</a>
            <a href="#">About</a>
            <a href="/">Logout</a>
          </div>
        </div>
        )}
}
export default Header