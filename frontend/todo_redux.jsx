import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';

const store = configureStore();
window.store = store;
window.allTodos = allTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

const App = () => (
  <Provider store={store}>
    <h1>Todos App</h1>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
