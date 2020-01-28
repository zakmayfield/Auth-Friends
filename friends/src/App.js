import React from 'react';
import { Header } from './components/Header';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SuperSecretFriends from './components/SuperSecretFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <PrivateRoute path="/protected" component={SuperSecretFriends} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
