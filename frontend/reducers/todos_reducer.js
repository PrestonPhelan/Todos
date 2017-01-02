import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;
