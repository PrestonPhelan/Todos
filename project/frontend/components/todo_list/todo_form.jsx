import React from 'react';

function uniqueId() {
  return new Date().getTime();
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", body: "", done: false};
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
    console.log(this.state);
    this.props.createTodo(this.state).then( () => this.setState({title: "", body: ""}));
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
        {this.props.errors.join(', ')}
      </div>
    );
  }
}

export default TodoForm;
