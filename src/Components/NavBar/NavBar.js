import React from 'react';
import larry from '../../image/Larry.jpg'
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <span className={classes.avatarContainer}>
                <img className={classes.larryPic} src={larry} alt="Larry Guerra" />
            </span>
            {/* <nav> */}
                <ul className={classes.navBar}>
                    <li className={classes.about}>About</li>
                    <li className={classes.skills}>Skills</li>
                    <li className={classes.projects}>Projects</li>
                    <li className={classes.contact}>Contact</li>
                </ul>
            {/* </nav> */}

        </header>
    )
}

export default NavBar;