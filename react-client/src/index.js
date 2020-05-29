import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { reducer } from './reducer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from './components/profile/Profile';
import GetProfile from './components/getProfile/getProfile';
import Home from './components/Home/home';

export const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/setDetails">
          <Profile />
        </Route>
        <Route exact path="/getDetails">
          <GetProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
