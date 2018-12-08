import React, { Component } from 'react';
import './App.css';
import larry from './image/Larry.jpg'
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <ul className="nav-bar">
            <img className="larry-pic" src={larry} alt="Larry Guerra" />
            <li className="about">About</li>
            <li className="skills">Skills</li>
            <li className="projects">Projects</li>
            <li className="contact">Contact</li>
          </ul>
        </div>
        <div className="body">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;



// Wireframe link: https://wireframe.cc/OqWBuA