/**
 * Created by mac1 on 2018/2/25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import store from '../Store.js';
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin:'10px',
  border:'5px solid yellow'
};

class Counter extends Component{
  constructor(props){
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState(){
    return {
      value:store.getState()[this.props.caption]
    };
  }

  onIncrement(){
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement(){
    store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange(){
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount(){
    store.unsubscribe(this.onChange)
  }

  render(){
    const value = this.state.value;
    const {caption} = this.props;

    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} 数量是:{value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption:PropTypes.string.isRequired
};

export default Counter;