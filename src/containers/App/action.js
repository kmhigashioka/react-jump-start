import api from '../../utilities/api';

export const GET_TODOS = 'App/GET_TODOS';
export const FULFILLED = '_FULFILLED';
export const ERROR = '_ERROR';

export const getTodos = () => async dispatch => {
  dispatch({
    type: GET_TODOS,
  });

  try {
    const { data } = await api.get('/todos');

    dispatch({
      type: GET_TODOS + FULFILLED,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_TODOS + ERROR,
      payload: err,
    });
  }

};
