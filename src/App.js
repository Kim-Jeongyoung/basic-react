import React from 'react';

import TodoItem from './TodoItem';
import todosData from './todosData';

const App = () => {
  const todosDataComponent = todosData.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));
  return <div className="todo-list">{todosDataComponent}</div>;
};

export default App;
