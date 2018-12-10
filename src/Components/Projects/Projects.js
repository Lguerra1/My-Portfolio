import React from 'react';
import Carousel from '../Carousel/Carousel';
import classes from './Projects.module.css';


const Projects = () => {

    return (
        <div className={classes.container}>
            <h1 className={classes.projects}>Projects</h1>
            <Carousel />
        </div>
    )

}

export default Projects