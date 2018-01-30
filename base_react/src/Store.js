/**
 * Created by mac1 on 2018/1/25.
 */
import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third':30
};

const store = createStore(reducer, initValues);

export default store;