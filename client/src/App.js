import React from 'react';
import './style.css';
import Navbar from "./components/navbar";
import Suggestion from './pages/suggestion';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
