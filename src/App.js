import React from 'react';
import Login from './pages/login/login.js';
import Mainlayout from './mainlayout/mainlayout.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  // const isLogin = localStorage.getItem("user");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/mainlayout" exact component={Mainlayout} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
