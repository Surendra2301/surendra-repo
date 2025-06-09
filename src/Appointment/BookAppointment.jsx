// import React, { useState } from 'react';
// import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const doctors = [
//   { id: 1, name: 'Dr. Krishna', specialization: 'Cardiologist', experience: '10 years' },
//   { id: 2, name: 'Dr. John', specialization: 'Dermatologist', experience: '8 years' },
//   { id: 3, name: 'Dr. Mohan', specialization: 'Pediatrician', experience: '12 years' },
//   { id: 4, name: 'Dr. David', specialization: 'Dentist', experience: '5 years' },
//   { id: 5, name: 'Dr. Teja ', specialization: 'Orthopedic', experience: '7 years' },
//   { id: 6, name: 'Dr. Jony', specialization: 'Psychiatrist', experience: '9 years' },
// ];

// const BookAppointment = () => {
//   const [show, setShow] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [appointment, setAppointment] = useState({ name: '', date: '' });
//   const navigate = useNavigate();

//   const handleShow = (doctor) => {
//     setSelectedDoctor(doctor);
//     setShow(true);
//   };

//   const handleClose = () => {
//     setShow(false);
//     setAppointment({ name: '', date: '' });
//     setSelectedDoctor(null);
//   };

//   const handleBook = () => {
//     if (!appointment.name || !appointment.date) {
//       alert("Please fill in your name and select a date.");
//       return;
//     }

//     handleClose();

    
//     navigate('/payment', {
//       state: {
//         doctor: selectedDoctor,
//         appointment: appointment
//       }
//     });
//   };

//   return (
//     <div className="p-4">
//       <h3 className="mb-4">Available Doctors</h3>
//       <Row>
//         {doctors.map((doc) => (
//           <Col md={4} key={doc.id} className="mb-4">
//             <Card>
//               <Card.Body>
//                 <Card.Title>{doc.name}</Card.Title>
//                 <Card.Text>
//                   <strong>Specialization:</strong> {doc.specialization} <br />
//                   <strong>Experience:</strong> {doc.experience}
//                 </Card.Text>
//                 <Button variant="primary" onClick={() => handleShow(doc)}>
//                   Book Appointment
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Book Appointment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedDoctor && (
//             <>
//               <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
//               <Form>
//                 <Form.Group>
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={appointment.name}
//                     onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mt-3">
//                   <Form.Label>Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     value={appointment.date}
//                     onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
//                   />
//                 </Form.Group>
//               </Form>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//           <Button variant="primary" onClick={handleBook}>Confirm & Pay</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default BookAppointment;







import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const doctors = [
  { id: 1, name: 'Dr. Krishna', specialization: 'Cardiologist', experience: '10 years' },
  { id: 2, name: 'Dr. John', specialization: 'Dermatologist', experience: '8 years' },
  { id: 3, name: 'Dr. Mohan', specialization: 'Pediatrician', experience: '12 years' },
  { id: 4, name: 'Dr. David', specialization: 'Dentist', experience: '5 years' },
  { id: 5, name: 'Dr. Teja ', specialization: 'Orthopedic', experience: '7 years' },
  { id: 6, name: 'Dr. Jony', specialization: 'Psychiatrist', experience: '9 years' },
];

const BookAppointment = () => {
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointment, setAppointment] = useState({ name: '', date: '' });
  const navigate = useNavigate();

  const handleShow = (doctor) => {
    setSelectedDoctor(doctor);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setAppointment({ name: '', date: '' });
    setSelectedDoctor(null);
  };

  const handleBook = () => {
    if (!appointment.name || !appointment.date) {
      alert("Please fill in your name and select a date.");
      return;
    }

    handleClose();

    navigate('/payment', {
      state: {
        doctor: selectedDoctor,
        appointment: appointment
      }
    });
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">
        <i className="bi bi-person-vcard-fill text-primary me-2"></i>Available Doctors
      </h3>
      <Row>
        {doctors.map((doc) => (
          <Col md={4} key={doc.id} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title><i className="bi bi-person-fill me-2"></i>{doc.name}</Card.Title>
                <Card.Text>
                  <p><i className="bi bi-heart-pulse-fill text-danger me-2"></i><strong>Specialization:</strong> {doc.specialization}</p>
                  <p><i className="bi bi-award-fill text-warning me-2"></i><strong>Experience:</strong> {doc.experience}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow(doc)}>
                  <i className="bi bi-calendar-check-fill me-2"></i>Book Appointment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-pencil-square me-2 text-primary"></i>Book Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDoctor && (
            <>
              <p><i className="bi bi-person-bounding-box me-2"></i><strong>Doctor:</strong> {selectedDoctor.name}</p>
              <Form>
                <Form.Group>
                  <Form.Label><i className="bi bi-person-lines-fill me-2"></i>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={appointment.name}
                    onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label><i className="bi bi-calendar-date-fill me-2"></i>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={appointment.date}
                    onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                  />
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="bi bi-x-circle-fill me-1"></i>Cancel
          </Button>
          <Button variant="primary" onClick={handleBook}>
            <i className="bi bi-credit-card-2-front-fill me-1"></i>Confirm & Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookAppointment;



