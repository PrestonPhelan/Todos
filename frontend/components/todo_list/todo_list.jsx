import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const listItems = todos.map((todo, idx) => (<TodoListItem key={idx} todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo}/> ));

  return(
    <div>
      <ul>
        {listItems}
      </ul>

      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};
export default TodoList;
