import React from 'react';
import style from '../styles/styleCircle.jsx';

console.log(style);
export default class Circle extends React.Component {
  constructor(props) {
      super(props)
      this.diameter = parseInt(this.props.radius, 10)*2;
      this.bindMethods(this);
      this.state = {
        body : this.addPhysic(),
        style : {
          width : (this.diameter) ? this.diameter+"px" : "0",
          height : (this.diameter) ? this.diameter+"px" : "0",
          borderRadius : (this.diameter) ? this.diameter+"px" : "0",
          backgroundColor : (this.props.backgroundColor) ? this.props.backgroundColor : "#fff",
          borderWidth: (this.props.borderWidth) ? this.props.borderWidth : "0",
          borderColor: (this.props.borderColor) ? this.props.borderColor : "#000",
          borderStyle: (this.props.borderStyle) ? this.props.borderStyle : "solid",
          transform :
            ((this.props.centered) ? "translate(-50%, -50%) " : "translate(0%, 0%) ")+
            ((this.props.angle) ? "rotate("+this.props.angle+"deg)" : "rotate(0deg)"),
          left : this.body.position.x,
          top : this.body.position.y,
          position:"absolute"
        }
      }
  }
  componentDidMount() {
    setInterval(this.loop, 17);
  }
  loop() {
    this.setState({
      body :this.body,
    })
    this.forceUpdate()
  }
  bindMethods(that){
    this.thisClick = this.thisClick.bind(that);
    this.addPhysic = this.addPhysic.bind(that);
    this.loop = this.loop.bind(that);
  }
  thisClick (){
    console.log(this.props)

    console.log(this.state.body)
  }
  addPhysic(){

    /*this.body = this.props.Physic.Bodies.circle(
      (this.diameter/2),
      (this.props.x) ? this.props.x : 0,
      (this.props.y) ? this.props.y : 0
    )*/
    this.body = this.props.Physic.Bodies.circle(
      15,
      20,
      40
    )
    this.props.Physic.addToWorld(this.body)
    return this.body
  }
  render() {
    return (
      <div className = "canvas-circle" style = {this.state.style} onClick={this.thisClick}>
        {this.props.children}
      </div>
    );
  }
}
