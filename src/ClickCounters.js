/**
 * Created by mac1 on 2018/1/16.
 */
import React, { Component } from 'react';
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.onClickButton.bind(this);
    this.state = {count:0};
  }

  onClickButton(){
    this.setState({
      count:this.state.count + 1
    });
  }

  render(){
    const counterStyle = {
      border: '1px solid red'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.addCount}>
          点我
        </button>
        <div>
          点击数目: {this.state.count}
        </div>
      </div>
    );
  }
}
export default ClickCounter;