import React, { useEffect, useState } from 'react';
import { Table, Container, Alert } from 'react-bootstrap';

const History = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem('appointments')) || [];
    setAppointments(stored);
  }, []);

  return (
    <Container className="mt-5">
      <h3 className="mb-4 text-primary">
        <i className="bi bi-clock-history me-2"></i>Appointment History
      </h3>

      {appointments.length === 0 ? (
        <Alert variant="info">
          <i className="bi bi-info-circle-fill me-2"></i>No appointments found.
        </Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-primary">
            <tr>
              <th><i className="bi bi-hash"></i> S.No</th>
              <th><i className="bi bi-person-badge-fill me-1"></i>Doctor Name</th>
              <th><i className="bi bi-heart-pulse-fill me-1 text-danger"></i>Specialization</th>
              <th><i className="bi bi-person-fill-check me-1 text-success"></i>Patient Name</th>
              <th><i className="bi bi-calendar2-date-fill me-1 text-warning"></i>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.doctorName}</td>
                <td>{item.specialization}</td>
                <td>{item.patientName}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default History;
