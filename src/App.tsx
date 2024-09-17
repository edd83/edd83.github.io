import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yoga from "./components/Yoga";
import React from 'react';
import NoMatch from './components/NoMatch';

function Main() {
  return <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Skills />
    <Resume />
    <Projects />
    <Testimonials />
    <Contact />
  </main>
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
            <Routes>
            <Route Component={Main} path="/" />
            <Route Component={Yoga} path="/yoga" />
            <Route Component={CardFollow} path="/yoga/card" />
            <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
