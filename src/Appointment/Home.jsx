import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BookAppointment from './BookAppointment';

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
    <>
      <h2>Welcome {username}</h2>
      <img src="./homeimage.png" alt="Welcome" className="img-fluid mt-3" />
    </>
  );
};

export default Home;
