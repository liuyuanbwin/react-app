/**
 * Created by mac1 on 2018/1/26.
 */
import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render(){
    return (
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second"/>
        <Counter caption="Third"/>
        <hr/>
        <Summary/>
      </div>
    );
  }
}

export default ControlPanel;