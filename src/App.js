// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Appointment/Login';
// import Home from './Appointment/Home';
// import Logout from './Appointment/Logout';
// import BookAppointment from './Appointment/BookAppointment';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Appointment/Sidebar';



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home/*" element={<Home />} />
//         <Route path="book" element={<BookAppointment />} />
//         <Route path="sidebar" element={<Sidebar />} />
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import Producttable from './Producttable';

// function App() {
//   return (
//     <div>
//       <Producttable />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Appointment/Login';
// import Home from './Appointment/Home';
// import Logout from './Appointment/Logout';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/logout" element={<Logout />} />
//         {/* Home route acts as layout for nested routes */}
//         <Route path="/home/*" element={<Home />} />
//         {/* Redirect unknown routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// src/App.js 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Appointment/Login';
import Home from './Appointment/Home';
import Logout from './Appointment/Logout';
import BookAppointment from './Appointment/BookAppointment';
import Sidebar from './Appointment/Sidebar';
import Payment from './Appointment/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/logout" element={<Logout />} />
        
      </Routes>
    </Router>
  );
}

export default App;








