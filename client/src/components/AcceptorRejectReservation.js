import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import PropTypes from 'prop-types'
import './layout/Cards.css'
import 'tachyons'
class Cards extends Component{

    render(){
        const {RoomID,from , to} = this.props.reserv
        return(
            <div className = "">
            <Card>
              <CardBody className ='b .georgia mb0 bold f4 bt bb tc mw7 center mt4 bg-light-blue black-80 tc pv4 avenir'>
                <CardText>{RoomID}</CardText>
                <CardText>{from}</CardText>
                <CardText>{to}</CardText>
                <Button className = 'but'>Accept</Button>
                <Button className = 'but'>Reject</Button>
              </CardBody>
            </Card>
          </div>
        )
    }
  
}
Cards.propTypes ={
    reserv:PropTypes.object.isRequired
  }
export default Cards