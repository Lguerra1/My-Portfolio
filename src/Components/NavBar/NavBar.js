import React from 'react';
import larry from '../../image/Larry.jpg'

const NavBar = () => {
    return (
        <header className="header">
            <div>
                <img className="larry-pic" src={larry} alt="Larry Guerra" />
            </div>
            {/* <nav> */}
                <ul className="nav-bar">
                    <li className="about">About</li>
                    <li className="skills">Skills</li>
                    <li className="projects">Projects</li>
                    <li className="contact">Contact</li>
                </ul>
            {/* </nav> */}

        </header>
    )
}

export default NavBar;