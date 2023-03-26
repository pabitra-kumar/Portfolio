import React from 'react';
import './index.css';

import { Home } from './routes/Home';
import { About } from './routes/About';
import { Project } from './routes/Project';
import { Contact } from './routes/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Project" element={<Project/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
