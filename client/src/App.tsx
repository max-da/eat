import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/Navbar';
import { Start } from './pages/Start';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Admin } from './pages/Admin';
import { Bookings } from './components/Booking';
import { ChangeBooking } from './components/ChangeBooking';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><Start /></Route>
          <Route path="/menu"><Menu /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/booking"><Bookings /></Route>
          <Route path="/admin/change/:id"><ChangeBooking /></Route>
          <Route path="/admin"><Admin /></Route>
        </Switch>
      </Router>
  );
}

export default App;
