import React from 'react'

export default (
  diameter,
  backgroundColor,
  borderWidth,
  borderColor,
  borderStyle,
  centered,
  angle,
  x,
  y
) => {
  return {
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
