import React from 'react';
import Stage from '../../canvas/stage/stage.jsx'
import Circle from '../../canvas/shape/circle.jsx'
import Rect from '../../canvas/shape/rectangle.jsx'

export default class Test extends React.Component {
  render() {
    return (
      <div className = "test-container">
        <Stage width = "700px" height = "500px" backgroundColor="#c7c7c7">
          <Circle
            radius="50px"
            backgroundColor="#fff"
            borderWidth="1px"
            x="400"
            y="150"
            angle="70"
            centered="true"
          />
          <Rect
          width="792"
          height="5"
          backgroundColor="#fff"
          borderWidth="1px"
          x="1"
          centered="true"
          y="493"
          />
        </Stage>
      </div>
    );
  }
}
