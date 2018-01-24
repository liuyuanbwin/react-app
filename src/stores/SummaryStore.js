/**
 * Created by mac1 on 2018/1/24.
 */
import AppDispatcher from '../AppDispatcher.js';
function computeSummary(conterValues) {
  let summary = 0;
  for (const key in counterValues){
    if(counterValues.hasOwnProperty(key)){
      summary += counterValues[key];
    }
  }
  return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype,{
  getSummary:function () {
    return computeSummary(CounterStore.getCounterValues());
  },
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
  if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)){
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange();
  }
});