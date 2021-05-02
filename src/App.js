import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import PricesPage from './pages/PricesPage/PricesPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ScrollUp from './components/ScrollUp/ScrollUp';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/prices">
            <PricesPage />
          </Route>
          <Route exact path="/services">
            <ServicesPage />
          </Route>
        </Switch>
      </Router>
      <ScrollUp />
    </div>
  );
}

export default App;
