const allTodos = (state) => {
  return Object.keys(state.todos).map(function(todo){
    return state.todos[todo];
  });
};

export default allTodos;
