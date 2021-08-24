import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import AppCars from './pages/AppCars';
import AddCars from './pages/AddCars';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to='/cars'>Cars</Link></li>
          <li><Link to='/add'>Add Cars</Link></li>
        </nav>
        <Switch>
          <Route path="/cars">
            <AppCars />
          </Route>
          <Route path="/add">
            <AddCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
