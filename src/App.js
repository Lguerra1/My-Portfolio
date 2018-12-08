import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (     
        <div>
          <NavBar />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      
    );
  }
}

export default App;



// Wireframe link: https://wireframe.cc/OqWBuA




