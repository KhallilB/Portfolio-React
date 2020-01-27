import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/navbar/Navbar.jsx';
import App from './components/app/App.jsx';
import Portfolio from './components/portfolio/Portfolio';

const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={App} />
      <Route
        path='/portfolio'
        exact
        component={Portfolio}
      />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
