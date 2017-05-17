import React from 'react';

export default class Rect extends React.Component {
  constructor(props) {
      super(props)
      this.bindMethods(this);
      this.addPhysic();
      this.style = {
        width : (this.props.width) ? this.props.width : "0",
        height : (this.props.height) ? this.props.height : "0",
        borderRadius : (this.props.radius) ? this.props.radius : "0",
        backgroundColor : (this.props.backgroundColor) ? this.props.backgroundColor : "#fff",
        borderWidth: (this.props.borderWidth) ? this.props.borderWidth : "0",
        borderColor: (this.props.borderColor) ? this.props.borderColor : "#000",
        borderStyle: (this.props.borderStyle) ? this.props.borderStyle : "solid",
        transform :
          ((this.props.centered) ? "translate(-50%, 0%) " : "translate(0%, 0%) ")+
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
    this.clickHandle = this.clickHandle.bind(that);
  }
  addPhysic(){
    let x = parseInt(this.props.x ,10)
    let y = parseInt(this.props.y ,10)
    let width = parseInt(this.props.width ,10)
    let height = parseInt(this.props.height ,10)
    let angle = parseInt(this.props.angle ,10)
    this.body = this.props.Physic.Bodies.rectangle(
      (x) ? x : 0,
      (y) ? y: 0,
      (width) ? width: 0,
      (height) ? height: 0,
      {
        angle:(angle) ? angle : 0,
        isStatic:true
      }
    )
    this.props.Physic.addToWorld(this.body)
  }
  clickHandle() {
    console.log(this.body);
  }
  render() {
    return (
      <div className = "canvas-rectangle" style = {this.state.style} onClick={this.clickHandle}>
        {this.props.children}
      </div>
    );
  }
}
