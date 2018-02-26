/**
 * Created by mac1 on 2018/1/16.
 */
import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary.js';
const style = {
  margin: '20px',
  border: '1px solid blue'
};

class ControlPanel extends Component {

  render(){
    console.log("进入 ControlPanel 渲染");
    return (
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second" />
        <Counter caption="Third" />
          <hr/>
         <Summary/>
        <button onClick={ ()=>this.forceUpdate()}>
          点我渲染
        </button>
      </div>
    );
  }
}

export default ControlPanel;