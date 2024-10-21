import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import '@picocss/pico/css/pico.min.css';
import Techniques from './pages/Techniques';
import Issues from './pages/Issues';
import GlobalMap from './pages/GlobalMap';
import Navigation from './components/Navigation';
import Awareness from './pages/Awareness';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {

  //Makes the browser theme to light
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/techniques' element={<Techniques/>} />
          <Route path='/issues' element={<Issues/>} />
          <Route path='/globalmap' element={<GlobalMap/>} />
          <Route path='/awareness' element={<Awareness/>} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
