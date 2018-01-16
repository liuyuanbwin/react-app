/**
 * Created by mac1 on 2018/1/16.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props){
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('进入 componentWillReceiveProps ' + this.props.caption);
  }

  componentWillMount(){
    console.log('进入 componentWillMount ' + this.props.caption);
  }

  componentDidMount(){
    console.log('进入 componentDidMount ' + this.props.caption);
  }

  onClickIncrementButton(){
    console.log('点击了添加');
    this.setState({count: this.state.count + 1});
  }

  onClickDecrementButton(){
    console.log('点击了减少');
    this.setState({count: this.state.count - 1});
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption) ||
      (nextState.count !== this.state.count);
  }

  render() {
    console.log('进入 ' + this.props.caption);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};

Counter.defaultProps = {
  initValue:0
};
export default  Counter;