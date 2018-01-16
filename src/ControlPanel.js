/**
 * Created by mac1 on 2018/1/16.
 */
import React, { Component } from 'react';
import Counter from './Counter';

const style = {
  margin: '20px',
  border: '1px solid blue'
};

class ControlPanel extends Component {
  render(){
    console.log("进入 ControlPanel 渲染");
    return (
      <div style={style}>
        <Counter caption="第一个: "/>
        <Counter caption="第二个: " initValue={10}/>
        <Counter caption="第三个: " initValue={20}/>
        <button onClick={ ()=>this.forceUpdate()}>
          点我渲染
        </button>
      </div>
    );
  }
}

export default ControlPanel;