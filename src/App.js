import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import AppCars from './pages/AppCars';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to='/cars'>Cars</Link></li>
        </nav>
        <Switch>
          <Route path="/cars">
            <AppCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
