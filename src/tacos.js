import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

// to pass each element in  the array to the child components and have them
// render {person}: {likesTacos}

// so the html page will show

export default class Tacos extends Component {
  constructor(){
    super();
    this.tacos = [
      {
        person:"Tom Cruise",
        likesTacos:"no",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jack_Reacher-_Never_Go_Back_Japan_Premiere_Red_Carpet-_Tom_Cruise_%2835375035831%29.jpg/220px-Jack_Reacher-_Never_Go_Back_Japan_Premiere_Red_Carpet-_Tom_Cruise_%2835375035831%29.jpg',
        desc: ''
      }, 
      {
        person:"Andrew Jackson",
        likesTacos:"never knew what tacos were",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Andrew_jackson_head.jpg/220px-Andrew_jackson_head.jpg',
        desc: ''
      },
      {
        person:"Rand Paul",
        likesTacos:"yes",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate.jpg/220px-Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate.jpg',
        desc: ''        
      }
    ];
  }
  render(){
    console.log(this.tacos);
    let tacoHTML = [];
    this.tacos.forEach((e)=>{
      tacoHTML.push(<TacoProfile taco={e}></TacoProfile>)
    });
    return (
      <div>
        <Row>
        {tacoHTML}
        </Row>
      </div>
    )
  }
}

class TacoProfile extends Component{
  constructor(){
    super();
  }
  componentDidMount() {
    console.log(this.props.taco);
  }
  render(){
    return (
      <Col xs="4">
      <Card>
      <CardImg top width="100%" src={this.props.taco.img} alt={this.props.taco.person} />
      <CardBody>
        <CardTitle>🌮 {this.props.taco.person}</CardTitle>
        <CardSubtitle>View on tacos: {this.props.taco.likesTacos}</CardSubtitle>
        <CardText>{this.props.taco.desc}</CardText>
      </CardBody>
    </Card>   
    </Col>

        
   
    )
  }
}