import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import NavBar from './Components/NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div><NavBar /></div>
          <div><AboutMe /></div>
          <div><Skills /></div>
          <div><Projects /></div>
          <div><Footer /></div>
        </div>
      </div>
    );
  }
}

export default App;



    // Wireframe link: https://wireframe.cc/OqWBuA




