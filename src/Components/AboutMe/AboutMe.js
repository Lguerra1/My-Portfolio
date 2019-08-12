import React from 'react';
import classes from './AboutMe.module.css';


const AboutMe = () => {

    return (

        <div className="container" id="aboutlink">
            <h1 className={`text-center display-3 mb-4 ${classes.aboutMeContainer}`} >About me</h1>
            <div className="row">
                <div className="col-1">
                </div>
                <div className={`${classes.biography} col-10`}>
                    <p>One of my favorite quotes is,"you reap what you sow." This has been true throughout my entire life, as I come from a farming background. Ever since I was seven-years-old, my parents have taught me to work hard and to learn that hard is necessary to succeed.</p>
                    <p>In my free time, I like to train martial arts. I have been training in Brazilian Jujitsu and Boxing for the past 6 years and have earned a blue belt in Four-7 Combat Jujitsu. Training in martial arts has taught me to always stay humble and to never underestimate others or get too confident.
                    </p>
                </div>
                <div className="col-1">
                </div>
            </div>
        </div>
    )
}

export default AboutMe