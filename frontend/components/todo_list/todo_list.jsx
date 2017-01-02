import React from 'react';
import TodoListItem from './todo_list_item.jsx';

const TodoList = ({todos}) => {
  const listItems = todos.map((todo, idx) => (<TodoListItem key={idx} todo={todo} /> ));

  return(
    <ul>
      {listItems}
    </ul>
  );
};
export default TodoList;
