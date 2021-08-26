import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/Navbar';
import { Admin } from './pages/Adminpage';
import { Startpage } from './pages/Startpage';
import { Bookings } from './components/Booking';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Startpage /></Route>
          <Route path="/booking"><Bookings /></Route>
          <Route path="/admin"><Admin /></Route>
        </Switch>
      </Router>
  );
}

export default App;
