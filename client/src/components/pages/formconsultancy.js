import Parser from 'html-react-parser';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'tachyons'
import axios from 'axios';

class formconsultancy extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      phone_number: '',
      User_Category:'Partner_CoWorkingSpace',
      Bio:'',
      Country:'',
      City:'',
      Password2:'',
      Name:'',
      Established_since:''
    }

  this.onChange = this.onChange.bind(this)

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value);

  }
  onSubmit=event => {
   console.log(this.state.Email)
   console.log(this.state.Country)
   console.log(this.state.Bio)
   console.log(this.state.City)
   console.log(this.state.Birth_Date)
   console.log(this.state.User_Category)
   console.log(this.state.FirstName)
    event.preventDefault();
    axios({
      method: 'post',
      url:'Https://Lirtenhubtest.herokuapp.com/api/users/register',
      data: {
        Email:this.state.Email,
    Country:this.state.Country,
    City:this.state.City,
    Bio:this.state.Bio,
    phone_number:this.state.phone_number,
    Password:this.state.Password,
    User_Category:this.state.User_Category,
    Name:this.state.Name ,
    Established_since: this.state.Established_since,
      }
    }).then(res => {
      alert('An Email Have Been Sent To The Admin For Approval')
      
    }).catch(err=>{
      console.log(err)
      alert(err.response.data.error);
    })
  
  }
    render(){
        return(
          <div>
          {/* <div className="header">
          <a href="#" className="logo">LirtenHub</a>
          <div className="header-right">
            <a className="active" href="/">SignIn</a>
            <a href="/SignUp">SignUp</a>
            <a href="/About">About</a>
            <Router>
                      <Link  to={"/Profile/"+x.id} >My profile</Link>
                        <div className="dropdown-content bg-light-green ">
                          
                          <h3>{console.log("hello "+x.id)}</h3>
                          
                        
                      </div>
                      </Router>
          
          </div>
        
        </div> */}
            <div>
            <link rel="shortcut icon" href=""/>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title className = 'Dark-blue'>Registration Form</title>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
            <link rel="stylesheet" href="../layout/Form.css"/>
          <body className="mado">
            <div className="container">
              <h1 className="brand"><span>Registration</span> Form</h1>
              <div className="wrapper animated bounceInLeft">
                <div className="company-info">
                  <h3>Registration</h3>
                  <ul>
                    <li><i className="fa fa-road"></i> LirtenHub st</li>
                    <li><i className="fa fa-phone"></i> 0777 5000 </li>
                    <li><i className="fa fa-envelope"></i> LirtenHub@Lirten.com </li>
                  </ul>
                </div>
                <div className="contact">
                  <h3>Create New Account</h3>
                  <form onSubmit={this.onSubmit.bind(this)}>
                  
                    <p>
                      <label>Name</label>
                      <input type="text"  onChange={this.onChange.bind(this)}value={this.state.Name} name="Name" required/>
                    </p>
                    <p>
                      <label>Email Address</label>
                      <input type="email" onChange={this.onChange.bind(this)} value={this.state.Email}  name="Email"required/>
                    </p>
                    <p>
                      <label>Password</label>
                      <input type="password" onChange={this.onChange.bind(this)} value={this.state.Password} name="Password" required/>
                    </p>
                    <p>
                      <label>Repeat Password</label>
                      <input type="password" onChange={this.onChange.bind(this)}name="Password2" required/>
                    </p> <p>
                      <label>Phone Number</label>
                      <input type="text" onChange={this.onChange.bind(this)} value={this.state.phone_number} name="phone_number" required/>
                    </p>
                    <p>
                      <label> Bio</label>
                      <input type="text" onChange={this.onChange.bind(this)} value={this.state.Bio} name="Bio" required/>
                    </p>
                    <p>
                      <label>City</label>
                      <input type="text" onChange={this.onChange.bind(this)} value={this.state.City} name="City" required/>
                    </p>
                    
                    <p>
                      <label>Country</label>
                      <input type="text" onChange={this.onChange.bind(this)} value={this.state.Country} name="Country" required/>
                    </p>
                    
                    <p>
                      <label>Established since</label>
                      <input type="text" onChange={this.onChange.bind(this)} value={this.state.Established_since} name="Established_since" required/>
                    </p>
                    <p></p>

                    <p classNameName="full">
                     <span className = 'reg'> <button type="submit" required>Register </button> </span>
                    </p>

                  </form>
                </div>
              </div>
            </div>
          
          </body>
            </div>
            </div>
        )
    }
    

}
export default formconsultancy

