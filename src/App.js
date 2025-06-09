import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Appointment/Login';
import Home from './Appointment/Home';
import Logout from './Appointment/Logout';
import BookAppointment from './Appointment/BookAppointment';
import Sidebar from './Appointment/Sidebar';
import Payment from './Appointment/Payment';
import History from './Appointment/History';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/logout" element={<Logout />} />
        
      </Routes>
    </Router>
  );
}

export default App;








