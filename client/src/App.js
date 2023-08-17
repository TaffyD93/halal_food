import React from 'react';
import './style.css';
import Navbar from "./components/navbar";
import Recommendation from './pages/recommendation';
import Map from './pages/map';
import Restaurant from './pages/restaurant';
import SignIn from './pages/sign_in';
import Home from './pages/home';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom"




function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
