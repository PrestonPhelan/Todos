import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form';

// ({todos, receiveTodo, removeTodo, fetchTodos}) =>
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }


  render(){
    const listItems = this.props.todos.map((todo, idx) => (<TodoListItem key={idx} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo}/> ));

    return(
      <div>
        <ul>
          {listItems}
        </ul>

        <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
