import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Route, BrowserRouter as Router,Link ,Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import PropTypes from 'prop-types'
import './layout/Cards.css'
import 'tachyons'
class Cards extends Component{
  state={

    Y:this.props.reserv._id

    }
  constructor(props) {
    super(props);
    this.state = {
     status: false
      
    }
  
    this.routeChangeAccept = this.routeChangeAccept.bind(this);
    this.routeChangeReject = this.routeChangeReject.bind(this);

  }
  
  routeChangeReject(event) {
    event.preventDefault();
    const {ReservID} = this.props.location.state
    console.log(ReservID)
    axios.put(`https://lirtenhub-nav2.herokuapp.com/api/reservations/declined/`+ReservID,{

    }).then(res => {
      this.setState({
        redirect: res.data
      })
    })

    let path = `/AcceptRejectReservation`;
    this.props.history.push(path);
  }
  routeChangeAccept(event) {
    event.preventDefault();
    const {ReservID} = this.props.location.state
    console.log(ReservID)
    axios.put(`https://lirtenhub-nav2.herokuapp.com/api/reservations/confirmed/`+ReservID,{

    }).then(res => {
      this.setState({
        redirect: res.data
      })
    })

    let path = `/AcceptRejectReservation`;
    this.props.history.push(path);
  }

    render(){
        const {RoomID,from , to} = this.props.reserv
        return(
            <div className = "">
            <Link className = "hideLink" to={{
                state: {
                  ReservID: this.state.Y
                }
              }} >
            <Card>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
                <CardText>{RoomID}</CardText>
                <CardText>{from}</CardText>
                <CardText>{to}</CardText>
                <Button className = 'but'  onClick={this.routeChangeAccept}>Accept</Button>
                <Button className = 'but' onClick={this.routeChangeReject}>Reject</Button>
              </CardBody>
            </Card>
            </Link>
          </div>
        )
    }
  
}
Cards.propTypes ={
    reserv:PropTypes.object.isRequired
  }
export default Cards