import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';

function App() {
  return (
    <div id='top' className="App">
      <Navbar />
      <Header />
      <About />
      <Experience/>
      <Projects />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
