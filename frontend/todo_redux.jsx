import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';

import Root from './components/root';



const store = configureStore();
window.store = store;
window.allTodos = allTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
