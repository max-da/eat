import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/Navbar';
import { Start } from './pages/Start';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Bookings } from './components/Booking';
import { Admin } from './pages/Admin';
import { ChangeBooking } from './pages/AdminChange';
import { NotFound } from './pages/NotFound';
import { MailDelete } from './pages/MailDelete';

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
          <Route path="/maildelete/:id"><MailDelete /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
  );
}

export default App;
