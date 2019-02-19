import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import todos from './containers/App/reducer';

const reducer = combineReducers({
  todos,
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
