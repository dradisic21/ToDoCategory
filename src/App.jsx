import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import { ToDoListPage } from './pages/ToDoListPage';
import { DatePicker } from "./components/DatePicker/DatePicker";
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <ToDoListPage />
          <DatePicker />
      </Router>
    </div>
  );
}

export default App;
