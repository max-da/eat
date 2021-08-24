import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Startpage } from './pages/Startpage';
import { Contactpage } from './pages/Contactpage';
import { Menu } from './pages/Menupage';

import './App.css';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Startpage /></Route>
          <Route path="/menu"><Menu></Menu></Route>
          <Route path="/contact"><Contactpage /></Route>
        </Switch>
      </Router>
  );
}

export default App;
