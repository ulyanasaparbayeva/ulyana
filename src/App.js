import React, { useRef, useEffect,useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from "./pages/Resume";
import MobileMenu from './components/MobileMenu';
import Typed from 'typed.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import myGif from './gifs/myGif.gif';



const App = () => {
  return (
    <>
      <div className="App appContainer">
        <Navbar />
        <MobileMenu />
        <SplashScreen />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<AboutMe/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
        </main>
      <Footer/>
      </div>
    </>
  );
}


function SplashScreen() {
  const splashEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      splashEl.current.classList.add('slide-out');
    }, 1000);
  }, []);

  return (
    <div className="splash-screen" ref={splashEl}>
      <div style={{textAlign:"center", marginTop:"250px"}}>
        <img src={myGif} alt="Loading GIF" className="loading-gif" />
      </div>
    </div>
  );
}






export default App;
