import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-lg border-0">
            <Row className="align-items-center">
              <Col md={6}>
                <img  src="/about.jpg"  alt="About" className="img-fluid rounded" />
              </Col>
              <Col md={6}>
                <h2 className="mb-3">
                  <i className="bi bi-hospital-fill text-primary me-2"></i>About Our Clinic
                </h2>
                <p>
                  Welcome to our Doctor Appointment Booking Platform. We aim to make your healthcare journey smooth and hassle-free. Book appointments with top specialists, access your records, and get reminders — all in one place.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="bi bi-person-check-fill text-success me-2"></i> Verified & Experienced Doctors
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-calendar-check-fill text-info me-2"></i> Easy Online Booking
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-clock-fill text-warning me-2"></i> 24/7 Appointment Access
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-shield-lock-fill text-danger me-2"></i> Safe and Secure Platform
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
