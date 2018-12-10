import React from 'react';
import larry from '../../image/Larry.jpg'
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <span className={classes.avatarContainer}>
                <img className={classes.larryPic} src={larry} alt="Larry Guerra" />
                <div className={classes.nameContainer}>
                    <h1 className={classes.h1}>Larry Guerra</h1>
                    <h3 className={classes.h3}>801-830-7109</h3>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/larry-guerra"> <i className="linkedin icon"></i></a>
                        <a className={classes.github} target="_blank" href="https://github.com/Lguerra1"> <i className="github icon"></i></a>
                    </div>
                </div>

            </span>

            <ul className={classes.navBar}>
                <li className={classes.about}>About</li>
                <li className={classes.skills}>Skills</li>
                <li className={classes.projects}>Projects</li>
                <li className={classes.contact}>Contact</li>
            </ul>
        </header>
    )
}

export default NavBar;