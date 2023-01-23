import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    return {
      min: 1,
      max: 100,
    };
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
