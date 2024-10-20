import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Techniques from './pages/Techniques';
import Issues from './pages/Issues';
import GlobalMap from './pages/GlobalMap';
import Navigation from './components/Navigation';
import Awareness from './pages/Awareness';

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/techniques' element={<Techniques/>} />
          <Route path='/issues' element={<Issues/>} />
          <Route path='/globalmap' element={<GlobalMap/>} />
          <Route path='/awareness' element={<Awareness/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
