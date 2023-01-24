import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {

    switch (action.type) {
      case 'NUM_MIN_CHANGED':
        return {
          ...state,
          min: action.payload
        };
      case 'NUM_MAX_CHANGED':
        return {
          ...state,
          max: action.payload
        };
        default:
          return {
            min: 1,
            max: 100,
          };
    }
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
