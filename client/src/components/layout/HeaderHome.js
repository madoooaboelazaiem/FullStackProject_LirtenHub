import React, {Component} from 'react'
import 'tachyons'
import '../layout/HeaderHome.css'

class Header extends Component{
    render(){
        return(
          <body>
        <div class="header">
          <a href="#default" class="logo">LirtenHub</a>
          <div class="header-right">
            <a class="active" href="">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
        </body>
        )}
}
export default Header