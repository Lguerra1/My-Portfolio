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

        <div className="container" >
            <h1 id="skillslink" className={`mt-5 mb-5 text-center display-3 ${classes.title}`}>Skills</h1>
            <div className="row">
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={html5} data-toggle="tooltip" data-placement="top" title="HTML5" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={css} data-toggle="tooltip" data-placement="top" title="CSS" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Js} data-toggle="tooltip" data-placement="top" title="JavaScript" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={postgres} data-toggle="tooltip" data-placement="top" title="Postgres" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Wordpress} data-toggle="tooltip" data-placement="top" title="WordPress" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={redux} data-toggle="tooltip" data-placement="top" title="Redux" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center `} src={react} data-toggle="tooltip" data-placement="top" title="React" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={node} data-toggle="tooltip" data-placement="top" title="Node" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Semantic} data-toggle="tooltip" data-placement="top" title="SemanticUI" />
                </div>
                <div className="col text-center mt-4">
                    <img className={`${classes.img} text-center`} src={Bootstrap} data-toggle="tooltip" data-placement="top" title="Bootstrap" />
                </div>
            </div>
        </div >
    )

}

export default Skills