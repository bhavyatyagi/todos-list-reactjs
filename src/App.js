import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import React, { useState } from 'react';
function App() {
  const onDelete = (todo) => {
    console.log("Delete", todo);
    // This will not work in react might work in angular
    // let index = todos.findIndex(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const addTodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);
    // setTodos([...todos, { title, desc }]);
    const myTodo = {
      sno: todos.length + 1,
      title,
      desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState([{
    sno: 1,
    title: 'Go to the Market',
    desc: "Buy some fruits and vegetables",
  },
  {
    sno: 2,
    title: 'Go to the Mall',
    desc: "Buy some clothes",
  },
  {
    sno: 3,
    title: 'Go to the Gym',
    desc: "Workout",
  }
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;