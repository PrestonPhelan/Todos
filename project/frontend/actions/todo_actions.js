import * as APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => {
  return APIUtil.getTodos().then(data => dispatch(receiveTodos(data)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.saveTodo(todo)
  .then(data => dispatch(receiveTodo(data)),
    err => dispatch(receiveErrors(err.responseJSON)));
};
