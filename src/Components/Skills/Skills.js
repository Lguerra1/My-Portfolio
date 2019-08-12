import React from 'react';
import classes from './Skills.module.css'
import css from '../../image/CSS.png'
import html5 from '../../image/html5.PNG'
import Js from '../../image/Js.jpg'
import postgres from '../../image/postgres.jpg'
import redux from '../../image/Redux.png'
import react from '../../image/React.png'
import node from '../../image/node.jpg'
import Semantic from '../../image/Semantic.jpg'
import Bootstrap from '../../image/Bootstrap.jpg'
import Wordpress from '../../image/Wordpress.png'


const Skills = () => {

    return (

        <container >
            <h1 id="skillslink" className={`mt-5 mb-5 text-center display-3 ${classes.title}`}>Skills</h1>
            <div className="row">
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={html5} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={css} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Js} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={postgres} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Wordpress} />
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={redux} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center `} src={react} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={node} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Semantic} />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Bootstrap} />
                </div>
            </div>
        </container>
    )

}

export default Skills