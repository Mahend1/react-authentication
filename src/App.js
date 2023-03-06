import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './react project/Navbar'
import Home from './react project/Home'
import Accounts from './react project/Accounts'
import About from './react project/About'
import UserDetalis from './react project/UserDetalis'
import Login from './react project/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route index element={<Login />} /> */}
          <Route path="Home" element={<Home />} />
          <Route path="Accounts" element={<Accounts />} />
          <Route path="About" element={<About />} />
          <Route path="UserDetalis" element={<UserDetalis />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
