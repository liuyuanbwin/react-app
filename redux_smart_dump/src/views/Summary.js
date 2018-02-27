/**
 * Created by mac1 on 2018/1/26.
 */
import React,{ Component } from 'react';

import store from '../Store.js';
const style = {
  background:'pink'
}
function Summary(props) {
  const {sum} = props;
  return(
    <div style={style}>Total: {sum}</div>
  );
}
class SummaryContainer extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState(){
    const state = store.getState();
    let sum = 0;
    for (const key in state){
      if (state.hasOwnProperty(key)){
        sum += state[key];
      }
    }
    return {sum:sum};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  onChange(){
    this.setState(this.getOwnState());
  }

  componentDidMount(){
    store.subscribe(this.onChange);
  }

  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }

  render(){
    return(
      <Summary sum={this.state.sum}/>
    );
  }
}
export default SummaryContainer;