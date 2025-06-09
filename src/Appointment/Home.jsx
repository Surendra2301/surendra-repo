import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BookAppointment from './BookAppointment';
import History from './History';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <>
      <Header />
      <div className="d-flex" style={{ minHeight: '85vh' }}>
        <Sidebar />
        <main className="p-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="book" element={<BookAppointment />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};


const Welcome = () => {
  const username = sessionStorage.getItem('username');

  return (
    <div>
      <h2>Welcome {username}</h2>
      <img src="/homeimage.png" alt="Welcome" />
    </div>
  );
};

export default Home;
