import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Chef from './components/Chef/Chef';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Menu />
              <Gallery />
              <Contact />
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chefs" element={<Chef />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
