import React from 'react';
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MessagingRoom from "./pages/MessagingRoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/app" component={MessagingRoom} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
