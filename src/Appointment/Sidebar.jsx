// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';



// const Sidebar = () => {
//   const location = useLocation();
//   const isBookPage = location.pathname === '/home/book';

//   return (
//     <nav className="bg-light p-3" style={{ width: '200px', height: '100vh' }}>
//       <ul className="nav flex-column">
//         <li>
//           <NavLink to="/home/dashboard" className="nav-link">
//             🏠 Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/home/book" className="nav-link">
//             📄 Book Appointment
//           </NavLink>

          
//           {isBookPage && (
//             <ul className="list-unstyled ms-3 mt-2">
//               {((doc) => (
//                 <li key={doc.id} className="text-muted small">
//                   🩺 {doc.specialization}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>

//         <li>
//           <NavLink to="/logout" className="nav-link text-danger">
//             🚪 Logout
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;



import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isBookPage = location.pathname === '/home/book';

  return (
    <nav className="bg-light p-3" style={{ width: '200px', height: '100vh' }}>
      <ul className="nav flex-column">
        <li>
          <NavLink to="/home" className="nav-link">
            🏠 Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/home/book" className="nav-link">
            📄 Book Appointment
          </NavLink>

          {isBookPage && (
            <ul className="list-unstyled ms-3 mt-2">
              
              
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/logout" className="nav-link text-danger">
            🚪 Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;



