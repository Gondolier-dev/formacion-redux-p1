import { combineReducers } from './combineReducers';
import { reducerCounter } from './counter/reducer';
export const reducers = combineReducers({
  counters: reducerCounter,
});
