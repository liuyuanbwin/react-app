/**
 * Created by mac1 on 2018/2/25.
 */
import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  return {
    type:ActionTypes.INCREMENT,
    counterCaption:counterCaption
  };
};
export const decrement = (counterCaption) => {
  return {
    type:ActionTypes.DECREMENT,
    counterCaption:counterCaption
  };
};