import { GET_TODOS, FULFILLED } from './action';

export default function todos(state = [], action = {}) {
  switch (action.type) {
    case GET_TODOS + FULFILLED:
      return action.payload;
    default:
      return state;
  }
}
