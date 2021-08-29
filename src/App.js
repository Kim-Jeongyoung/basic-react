import React from 'react';

import TodoItem from './TodoItem';
import todosData from './todosData';

//class-based component

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
  // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          //modify prevState: Don't do that
          // todo.completed = !todo.completed;
          //returning new object
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
// const App = () => {
//   const todosDataComponent = todosData.map((item) => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div className="todo-list">{todosDataComponent}</div>;
// };

// export default App;
