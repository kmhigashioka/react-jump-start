import { combineReducers, createStore } from 'redux';
import todos from './containers/App/reducer';

const reducer = combineReducers({
  todos,
});
const store = createStore(reducer);

export default store;
