import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id)
        return todo;
      else
        return newTodo;
    })
    setTodos([...updatedTodos]); //Yeni bir diziye koyulmasının sebebi componentin yeniden rende edilmesi
  }
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => (todo.id !== todoId)));
  }


  //console.log(todos)
  return (
    <div className="App container">
       <h3 >Todo List App</h3>
      <TodoCreate onCreateTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} onUpdateTodo={updateTodo} />
    </div>
  );
}

export default App;
