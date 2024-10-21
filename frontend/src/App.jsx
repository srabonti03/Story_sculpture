import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Books from './Books/Books';
import About from './About/About';
import Contact from './Contact/Contact';
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
