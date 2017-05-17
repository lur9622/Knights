import React from 'react';

export default class Circle extends React.Component {
  constructor(props) {
      super(props)
      this.bindMethods(this);
      this.diameter = parseInt(this.props.radius, 10)*2;
      this.addPhysic();
      this.style = {
        width : (this.diameter) ? this.diameter+"px" : "0",
        height : (this.diameter) ? this.diameter+"px" : "0",
        borderRadius : (this.diameter) ? this.diameter+"px" : "0",
        backgroundColor : (this.props.backgroundColor) ? this.props.backgroundColor : "#fff",
        borderWidth: (this.props.borderWidth) ? this.props.borderWidth : "0",
        borderColor: (this.props.borderColor) ? this.props.borderColor : "#000",
        borderStyle: (this.props.borderStyle) ? this.props.borderStyle : "solid",
        transform :
          ((this.props.centered) ? "translate(-50%, 0%)" : "translate(0%, 0%) ")+
          ((this.props.angle) ? "rotate("+this.props.angle+"deg)" : "rotate(0deg)"),
        left : this.body.position.x,
        top : this.body.position.y,
        position:"absolute"
      }
      this.state = {
        style : this.style
      }
  }
  componentDidMount() {
    setInterval(this.loop, 17);
  }
  loop() {
    this.style.top = this.body.position.y
    this.style.left = this.body.position.x
    this.style.transform = ((this.props.centered) ? "translate(-50%, 0%) " : "translate(0%, 0%) ")+
    ((this.props.angle) ? "rotate("+this.body.angle+"deg)" : "rotate(0deg)")
    this.setState({
      style:this.style
    })
  }
  bindMethods(that){
    this.addPhysic = this.addPhysic.bind(that);
    this.loop = this.loop.bind(that);
  }
  addPhysic(){
    let x = parseInt(this.props.x ,10)
    let y = parseInt(this.props.y ,10)
    let angle = parseInt(this.props.angle ,10)
    this.body = this.props.Physic.Bodies.circle(
      (x) ? x : 0,
      (y) ? y: 0,
      (this.diameter) ? this.diameter : 0,
      {
        angle:(angle) ? angle : 0
      }
    )
    this.props.Physic.addToWorld(this.body)
  }
  render() {
    return (
      <div className = "canvas-circle" style = {this.state.style}>
        {this.props.children}
      </div>
    );
  }
}
