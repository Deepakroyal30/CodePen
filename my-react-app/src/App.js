import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import StartCoding from './components/StartCoding';
import Compiler from './components/Compiler';
import RegisterAndLogin from './RegisterAndLogin'; // Import RegisterAndLogin component

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartCoding />} />
        <Route path="/Compiler" element={<Compiler />} />
        <Route path="/auth" element={<RegisterAndLogin />} /> {/* Add this route */}
      </Routes>
    </div>
  );
}

export default App;
