import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Startpage } from './pages/Startpage';

import './App.css';
import { Menu } from './pages/Menu';


function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Startpage /></Route>
          <Route path="/menu"><Menu></Menu></Route>
        </Switch>
      </Router>
  );
}

export default App;
