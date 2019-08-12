import React from 'react';
import Carousel from '../Carousel/Carousel';
import classes from './Projects.module.css';


const Projects = () => {

    return (
        <div className={classes.container} id="projectslink">
            <h1 className={`mt-5 mb-5 text-center display-3 ${classes.projects}`}>Projects</h1>
            <Carousel />
        </div>
    )

}

export default Projects