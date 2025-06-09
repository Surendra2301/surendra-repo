// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const Payment = () => {
//   const location = useLocation();
//   const { doctor, appointment } = location.state || {};

//   if (!doctor || !appointment) {
//     return <div className="text-danger p-3">Invalid appointment details.</div>;
//   }

//   return (
//     <PayPalScriptProvider options={{ 'client-id': 'Ac9ERYf8Uq6XZhNLMYQQ7VTXY8SlMFWGbv_2RP4Ov4RH22yfNh4W-A3pJXbO4lAs81hIQP-Gl1iVyYKX' }}> 
//     {/* Ac9ERYf8Uq6XZhNLMYQQ7VTXY8SlMFWGbv_2RP4Ov4RH22yfNh4W-A3pJXbO4lAs81hIQP-Gl1iVyYKX */}
//       <div className="p-4">
//         <h3>Payment for Appointment</h3>
//         <p><strong>Doctor:</strong> {doctor.name}</p>
//         <p><strong>Specialization:</strong> {doctor.specialization}</p>
//         <p><strong>Patient:</strong> {appointment.name}</p>
//         <p><strong>Date:</strong> {appointment.date}</p>

//         <PayPalButtons
//           style={{ layout: 'vertical' }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: {
//                   value: '100.00'
//                 }
//               }]
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(`Payment successful! Thank you, ${details.payer.name.given_name}`);
//             });
//           }}
//         />
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default Payment;




// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const Payment = () => {
//   const location = useLocation();
//   const { doctor, appointment } = location.state || {};

//   if (!doctor || !appointment) {
//     return (
//       <div className="text-danger p-4">
//         <i className="bi bi-exclamation-triangle-fill me-2"></i>
//         Invalid appointment details.
//       </div>
//     );
//   }

//   return (
//     <PayPalScriptProvider options={{ 'client-id': 'Ac9ERYf8Uq6XZhNLMYQQ7VTXY8SlMFWGbv_2RP4Ov4RH22yfNh4W-A3pJXbO4lAs81hIQP-Gl1iVyYKX' }}>
//       <div className="container py-5">
//         <div className="card shadow-lg p-4">
//           <h3 className="mb-4 text-center">
//             <i className="bi bi-credit-card-fill text-primary me-2"></i>Payment for Appointment
//           </h3>

//           <div className="mb-3">
//             <i className="bi bi-person-fill me-2 text-info"></i>
//             <strong>Doctor:</strong> {doctor.name}
//           </div>
//           <div className="mb-3">
//             <i className="bi bi-heart-pulse-fill me-2 text-danger"></i>
//             <strong>Specialization:</strong> {doctor.specialization}
//           </div>
//           <div className="mb-3">
//             <i className="bi bi-person-bounding-box me-2 text-success"></i>
//             <strong>Patient:</strong> {appointment.name}
//           </div>
//           <div className="mb-4">
//             <i className="bi bi-calendar-date-fill me-2 text-warning"></i>
//             <strong>Date:</strong> {appointment.date}
//           </div>

//           <div className="text-center">
//             <PayPalButtons
//               style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'paypal' }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [{
//                     amount: {
//                       value: '100.00'
//                     }
//                   }]
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order.capture().then((details) => {
//                   alert(`Payment successful! Thank you, ${details.payer.name.given_name}`);
//                 });
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default Payment;




import React from 'react';
import { useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = () => {
  const location = useLocation();
  const { doctor, appointment } = location.state || {};

  if (!doctor || !appointment) {
    return (
      <div className="text-danger p-4">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        Invalid appointment details.
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={{ 'client-id': 'Ac9ERYf8Uq6XZhNLMYQQ7VTXY8SlMFWGbv_2RP4Ov4RH22yfNh4W-A3pJXbO4lAs81hIQP-Gl1iVyYKX' }}>
      <div className="container py-5">
        <div className="card shadow-lg p-4">
          <h3 className="mb-4 text-center">
            <i className="bi bi-credit-card-fill text-primary me-2"></i>Payment for Appointment
          </h3>

          <div className="mb-3">
            <i className="bi bi-person-fill me-2 text-info"></i>
            <strong>Doctor:</strong> {doctor.name}
          </div>
          <div className="mb-3">
            <i className="bi bi-heart-pulse-fill me-2 text-danger"></i>
            <strong>Specialization:</strong> {doctor.specialization}
          </div>
          <div className="mb-3">
            <i className="bi bi-person-bounding-box me-2 text-success"></i>
            <strong>Patient:</strong> {appointment.name}
          </div>
          <div className="mb-4">
            <i className="bi bi-calendar-date-fill me-2 text-warning"></i>
            <strong>Date:</strong> {appointment.date}
          </div>

          <div className="text-center">
            <PayPalButtons
              style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'paypal' }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '100.00'
                    }
                  }]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Payment successful! Thank you, ${details.payer.name.given_name}`);

                  const newAppointment = {
                    doctorName: doctor.name,
                    specialization: doctor.specialization,
                    patientName: appointment.name,
                    date: appointment.date,
                  };

                  const existingAppointments = JSON.parse(sessionStorage.getItem('appointments')) || [];
                  existingAppointments.push(newAppointment);
                  sessionStorage.setItem('appointments', JSON.stringify(existingAppointments));

                  window.location.href = '/home';
                });
              }}
              onCancel={() => {
                alert('Payment cancelled.');
              }}
              onError={(err) => {
                console.error('Payment error:', err);
                alert('Payment failed. Please try again.');
              }}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;







