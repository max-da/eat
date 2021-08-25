import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Start } from './pages/Start';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';

import './App.css';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Start /></Route>
          <Route path="/menu"><Menu /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </Router>
  );
}

export default App;
