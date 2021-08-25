import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Startpage } from './pages/Startpage';

import './App.css';
import { Bookings } from './components/Booking';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Startpage /></Route>
          <Route path="/booking"><Bookings></Bookings></Route>
        </Switch>
      </Router>
  );
}

export default App;
