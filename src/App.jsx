import React from 'react';
import Home from './Home/Home';
import Courses from './courses/Courses';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

import AboutUs from './components/AboutUs';
import Contact from './Contact/Contact';

function App() {
  const [authUser, setAuthUser] = useAuth();
console.log("haikini",authUser);

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to='/signup' />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
