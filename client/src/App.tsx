import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Startpage } from './pages/Startpage';

import './App.css';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Startpage /></Route>
        </Switch>
      </Router>
  );
}

export default App;
