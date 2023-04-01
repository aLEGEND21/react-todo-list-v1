import React, { useEffect } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodo = (todo) => {
    if (todo === '') return;
    const newTodo = { id: Date.now(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(id);
    setTodos([...updatedTodos]);
    localStorage.setItem('todos', JSON.stringify([...updatedTodos]));
  }

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...updatedTodos]);
    localStorage.setItem('todos', JSON.stringify([...updatedTodos]));
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
