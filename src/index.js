import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/app/App.jsx';
import Navbar from './components/navbar/Navbar.jsx';

const routing = (
  <Router>
    <Navbar />
    <Switch>
      <div>
        <Route path='/' component={App}></Route>
      </div>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
