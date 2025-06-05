// src/Appointment/Payment.js    payment not working only view
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const Payment = () => {
//   const location = useLocation();
//   const { doctor, appointment } = location.state || {};

//   if (!doctor || !appointment) {
//     return (
//       <div className="text-danger p-3">
//         Invalid appointment details. Please book again.
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h3>Payment for Appointment</h3>
//       <p><strong>Doctor:</strong> {doctor.name}</p>
//       <p><strong>Specialization:</strong> {doctor.specialization}</p>
//       <p><strong>Patient:</strong> {appointment.name}</p>
//       <p><strong>Date:</strong> {appointment.date}</p>

//       <PayPalScriptProvider options={{ 'client-id': 'AaG8tENWI73y_IwxrungqiktunIo4TJSaAc1X9jWzpLLAMc5DSx9z9BMyTMXk2YgQZFJIH1GauL2cGkt' }}>
//         <PayPalButtons
//           style={{ layout: 'vertical' }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: { value: '100.00' } // Appointment fee
//               }]
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(`Payment successful! Thank you, ${details.payer.name.given_name}`);
//             });
//           }}
//         />
//       </PayPalScriptProvider>
//     </div>
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
    return <div className="text-danger p-3">Invalid appointment details.</div>;
  }

  return (
    <PayPalScriptProvider options={{ 'client-id': 'test' }}> 
      <div className="p-4">
        <h3>Payment for Appointment</h3>
        <p><strong>Doctor:</strong> {doctor.name}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Patient:</strong> {appointment.name}</p>
        <p><strong>Date:</strong> {appointment.date}</p>

        <PayPalButtons
          style={{ layout: 'vertical' }}
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
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;







