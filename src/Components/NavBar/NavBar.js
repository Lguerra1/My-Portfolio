import React from 'react';
import larry from '../../image/Larry.jpg'
import classes from './NavBar.module.css';

const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <span className={`${classes.avatarContainer} mr-5`}>
                <img className={`${classes.larryPic} mr-5`} src={larry} alt="Larry Guerra" />
                <div className={classes.nameContainer}>
                    <h1 className={classes.h1}>Larry Guerra</h1>
                    <h3 className={classes.h3}>Nightmachine@gmail.com</h3>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/larry-guerra"> <i className="linkedin icon"></i></a>
                        <a className={classes.github} target="_blank" href="https://github.com/Lguerra1"> <i className="github icon"></i></a>
                    </div>
                </div>

            </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link mr-5 h5" href="#aboutlink">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5 h5" href="#skillslink">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5 h5" href="#projectslink">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>

        // <header className={classes.header}>
        //     <span className={classes.avatarContainer}>
        //         <img className={classes.larryPic} src={larry} alt="Larry Guerra" />
        //         <div className={classes.nameContainer}>
        //             <h1 className={classes.h1}>Larry Guerra</h1>
        //             <h3 className={classes.h3}>Nightmachine@gmail.com</h3>
        //             <div>
        //                 <a target="_blank" href="https://www.linkedin.com/in/larry-guerra"> <i className="linkedin icon"></i></a>
        //                 <a className={classes.github} target="_blank" href="https://github.com/Lguerra1"> <i className="github icon"></i></a>
        //             </div>
        //         </div>

        //     </span>

        //     <ul className={classes.navBar}>
        //         <li className={classes.about}><a href="#aboutlink">About</a> </li>
        //         <li className={classes.skills}><a href="#skillslink">Skills</a></li>
        //         <li className={classes.projects}><a href="#projectslink">Projects</a></li>
        //         {/* <li className={classes.contact}>Contact</li> */}
        //     </ul>
        // </header>

    )
}

export default NavBar;