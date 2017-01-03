import React from 'react';

function uniqueId() {
  return new Date().getTime();
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", body: "", id: 0, done: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.id = uniqueId();
    this.props.receiveTodo(this.state);
    this.setState({title: "", body: "", id: 0, done: false});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title<br />
          <input
            type="text"
            id="title"
            onChange={this.updateTitle}
            value={this.state.title}></input>
        </label><br />

          <label>
            Body <br />
          <textarea
            onChange={this.updateBody}
            value={this.state.body}>
          </textarea>
          </label>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
