import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  Envelope,
  Telephone,
  GeoAlt,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'react-bootstrap-icons';
import './Footer.css'; 
 
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
 
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
 
  return (
    <motion.footer
      className="footer bg-dark text-white pt-5 pb-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Container>
        <Row className="g-4">
          {/* Contact Info */}
          <Col md={4} as={motion.div} variants={itemVariants}>
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-decoration">Contact Us</span>
              </h4>
              <div className="footer-item">
                <GeoAlt className="footer-icon" />
                <span>24/7 Hospital, Vizag</span>
              </div>
              <div className="footer-item">
                <Telephone className="footer-icon" />
                <span>+91 9876543210</span>
              </div>
              <div className="footer-item">
                <Envelope className="footer-icon" />
                <span>info@24/7hospital.com</span>
              </div>
            </div>
          </Col>
 
          {/* Hours */}
          <Col md={4} as={motion.div} variants={itemVariants}>
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-decoration">Opening Hours</span>
              </h4>
              <div className="footer-item">
                <Clock className="footer-icon" />
                <div>
                  <p className="mb-1">Mon-Fri: 6am - 10pm</p>
                  <p className="mb-1">Sat-Sun: 8am - 8pm</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="small">24/7 Available</p>
              </div>
            </div>
          </Col>
 
          {/* Social Links */}
          <Col md={4} as={motion.div} variants={itemVariants}>
            <div className="footer-section">
              <h4 className="footer-heading">
                <span className="heading-decoration">Follow Us</span>
              </h4>
              <div className="social-links">
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="social-link facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="social-link instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="social-link twitter"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="social-link youtube"
                >
                  <Youtube size={20} />
                </motion.a>
              </div>
             
              <div className="newsletter mt-4">
                <h5 className="newsletter-title">Newsletter</h5>
                <motion.div
                  className="input-group"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
 
        {/* Copyright */}
        <motion.div
          className="text-center mt-5 pt-3 border-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-0">
            &copy; {new Date().getFullYear()} 24/7 Hospital. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </motion.footer>
  );
};
 
export default Footer;