import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro/>
        <About />
        <Education/>
        <Skills/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
