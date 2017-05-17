import React from 'react';
import Physic from '../../physic/physic.jsx'

export default class Stage extends React.Component {
  constructor(props) {
      super(props)
      // Physic
      this.Physic = new Physic();
      // Stage
      this.state = {
        style : {
          width : (this.props && this.props.width) ? this.props.width : 0,
          height : (this.props && this.props.height) ? this.props.height : 0,
          backgroundColor : (this.props && this.props.backgroundColor) ? this.props.backgroundColor : "#fff",
          position : "relative",
          overflow:"hidden"
        }
      }
      //Bind
      this.bindMethods(this)
  }
  bindMethods(that){
    this.loop = this.loop.bind(that);
  }
  componentDidMount() {
    setInterval(this.loop, 17);
  }
  renderChildren() {
    return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          Physic: this.Physic,
          Game :this.Game
        })
    })
  }
  loop() {
    this.forceUpdate()
  }
  render() {
    return (
      <div className = "canvas-stage" style = {this.state.style}>
        {this.renderChildren()}
      </div>
    );
  }
}
