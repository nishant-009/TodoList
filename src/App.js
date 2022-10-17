import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';

function App() {

  let todos = [
    {
      sno: 1,
      title: "Visit D-mart",
      desc: "Need to complete this task by tomorrow"
    },
    {
      sno: 2,
      title: "Collect docs from NMMC",
      desc: "Complete this as soon as possible "
    },
    {
      sno: 3,
      title: "Order Diwali Lights",
      desc: "Order it now so it would be used in next week"
    }
  ]

  return (
    <div className="App">
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos}/>
      <Footer />
    </div>
  );
  
}

export default App;
 