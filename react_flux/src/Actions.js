/**
 * Created by mac1 on 2018/1/24.
 */
import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption) => {
  AppDispatcher.dispatch({
    type:ActionTypes.INCREMENT,
    counterCaption:counterCaption
  });
};
export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type:ActionTypes.DECREMENT,
    counterCaption:counterCaption
  });
};