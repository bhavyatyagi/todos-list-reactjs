import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from 'react-router-dom';
function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log("Delete", todo);
    // This will not work in react might work in angular
    // let index = todos.findIndex(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos")
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
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;