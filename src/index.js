import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
