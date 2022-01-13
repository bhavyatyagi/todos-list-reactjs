import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
function App() {
  let todos = [{
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
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;