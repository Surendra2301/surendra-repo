import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      sessionStorage.setItem('username', username);
      navigate('/home');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <img
        src="./background.png"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card p-4 shadow" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <h3 className="text-center mb-4">Doctor Appointment</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       sessionStorage.setItem('username', username);
//       navigate('/home');
//     } else {
//       alert('Please enter both username and password.');
//     }
//   };

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
//       <img
//         src="./background.png"
//         alt="Background"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -1
//         }}
//       />

      // <div className="d-flex vh-100 justify-content-center align-items-center">
      //   <div className="card p-4 shadow" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
      //     {/* 🩺 Stethoscope GIF at top */}
      //     <div className="text-center">
      //       <img src="./stethoscope.gif" alt="Stethoscope" style={{ width: '100px' }} />
      //     </div>

//           <h3 className="text-center mb-4">Doctor Appointment</h3>
//           <form onSubmit={handleLogin}>
//             <div className="mb-3">
//               <label>Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={username}
//                 onChange={e => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
