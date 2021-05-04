import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import PricesPage from './pages/PricesPage/PricesPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ScrollUp from './components/ScrollUp/ScrollUp';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';

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
          <Route exact path="/privacy">
            <PrivacyPage />
          </Route>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
      <ScrollUp />
    </div>
  );
}

export default App;
