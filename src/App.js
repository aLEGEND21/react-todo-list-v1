import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    if (todo === '') return;
    const newTodo = { id: Date.now(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(id);
    setTodos([...updatedTodos]);
  }

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  }

  return (
    <div className="todo-app">
      <h1 id="todo-header">Todo List</h1>
      <Input addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </div>
  );
}

export default App;
