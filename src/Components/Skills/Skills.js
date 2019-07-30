import React from 'react';
import classes from './Skills.module.css'
import css from '../../image/CSS.jpg'
import html5 from '../../image/html5.jpg'
import Js from '../../image/Js.jpg'
import postgres from '../../image/postgres.jpg'
import redux from '../../image/Redux.jpg'
import react from '../../image/React.jpg'
import node from '../../image/node.jpg'
import Semantic from '../../image/Semantic.jpg'


const Skills = () => {

    return (
        
            <div id="skillslink" className={classes.skillsContainer}>
                <h1 className={`${classes.skills}, mt-5 text-center display-3`}>Skills</h1>
                <div className={classes.skillsIcons}>
                    <div className={classes.rowOne}>
                        <img className={classes.img} src={html5} />
                        <img className={classes.img} src={css} />
                        <img className={classes.img} src={Js} />
                        <img className={classes.img} src={postgres} />
                    </div>
                    <div className={classes.rowTwo}>
                        <img className={classes.img} src={redux} />
                        <img className={classes.img} src={react} />
                        <img className={classes.img} src={node} />
                        <img className={classes.img} src={Semantic} />
                    </div>
                </div>
            </div>
      
    )

}

export default Skills