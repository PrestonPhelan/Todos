import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      let newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      let newestState = merge({}, state);
      delete newestState[action.todo.id];
      return newestState;
    default:
      return state;
  }
};

export default todosReducer;
