import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/header/header.js';
import Index from './components/body/index.js';
import Main from './components/body/main.js';
import Login from './components/body/login.js';
import Echouer from './components/body/echouer.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/echouer" element={<Echouer />} />
      </Routes>
    </Router>
  );
}

export default App;

