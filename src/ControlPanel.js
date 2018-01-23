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
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0,10,20];
        const initSum = this.initValues.reduce((a,b) => a + b, 0);
        this.state = {
            sum: initSum
        };
    }

    onCounterUpdate(newValue, previousValue){
        const valueChange = newValue - previousValue;
        this.setState({
            sum:this.state.sum + valueChange
        });
    }


  render(){
    console.log("进入 ControlPanel 渲染");
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="第一个: "/>
        <Counter onUpdate={this.onCounterUpdate} caption="第二个: " initValue={10}/>
        <Counter onUpdate={this.onCounterUpdate} caption="第三个: " initValue={20}/>
          <hr/>
          <div>总数:{this.state.sum}</div>
        <button onClick={ ()=>this.forceUpdate()}>
          点我渲染
        </button>
      </div>
    );
  }
}

export default ControlPanel;