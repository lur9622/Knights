import React from 'react';

export default class Rect extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        style : {
          width : (this.props.width) ? this.props.width : "0",
          height : (this.props.height) ? this.props.height : "0",
          borderRadius : (this.props.radius) ? this.props.radius : "0",
          backgroundColor : (this.props.backgroundColor) ? this.props.backgroundColor : "#fff",
          borderWidth: (this.props.borderWidth) ? this.props.borderWidth : "0",
          borderColor: (this.props.borderColor) ? this.props.borderColor : "#000",
          borderStyle: (this.props.borderStyle) ? this.props.borderStyle : "solid",
          transform :
            ((this.props.centered) ? "translate(-50%, -50%) " : "translate(0%, 0%) ")+
            ((this.props.angle) ? "rotate("+this.props.angle+"deg)" : "rotate(0deg)"),
          left:(this.props.x) ? this.props.x : "0",
          top:(this.props.y) ? this.props.y : "0",
          position:"absolute"
        }
      }
  }
  render() {
    return (
      <div className = "canvas-rectangle" style = {this.state.style}>
        {this.props.children}
      </div>
    );
  }
}
