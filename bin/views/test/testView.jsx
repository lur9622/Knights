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
            radius="15px"
            backgroundColor="#fff"
            borderWidth="1px"
            centered="true"
            x="10"
            y="50"
            angle="70"
          />
        </Stage>
      </div>
    );
  }
}
