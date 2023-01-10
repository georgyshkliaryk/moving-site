import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import PricesPage from './pages/PricesPage/PricesPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ScrollUp from './components/ScrollUp/ScrollUp';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import CovidPage from './pages/CovidPage/CovidPage';
import FaqPage from './pages/FaqPage/FaqPage';
import React from 'react';

import WOW from "wowjs";

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW({ mobile:false }).init();
  }
  render() {
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
          <Route exact path="/faq">
            <FaqPage />
          </Route>
          <Route exact path="/privacy">
            <PrivacyPage />
          </Route>
          <Route exact path="/covid-updates">
            <CovidPage />
          </Route>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
      <ScrollUp />
    </div>
  );
  }
}

export default App;
