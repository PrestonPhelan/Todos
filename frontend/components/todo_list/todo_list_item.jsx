import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeDone = this.changeDone.bind(this);
    this.doneButtonText = this.doneButtonText.bind(this);
  }

  deleteTodo(e) {
    e.preventDefault;
    this.props.removeTodo(this.props.todo);
  }

  changeDone(e){
    e.preventDefault;
    let newTodo = merge({},this.props.todo);
    this.props.todo.done === true ? newTodo.done = false : newTodo.done = true;
    this.props.receiveTodo(newTodo);
  }

  doneButtonText(){
    return this.props.todo.done === true ? "Undo" : "Done";
  }

  render() {
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.deleteTodo}>Delete</button>
        <button onClick={this.changeDone}>{this.doneButtonText()}</button>
      </li>
    );
  }

}

export default TodoListItem;
