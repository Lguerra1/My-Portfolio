import React from 'react';
import classes from './AboutMe.module.css';


const AboutMe = () => {

    return (

        <container id="aboutlink">
            <h1 className={`text-center display-3 mb-4 ${classes.aboutMeContainer}`} >About me</h1>
            <div class="row">
                <div class="col-2">
                </div>
                <div className={`${classes.biography} col-8`}>
                    <p>One of my favorite quotes is,"you reap what you sow." This has been true throughout my entire life, as I come from a farming background. Ever since I was seven-years-old, my parents have taught me to work hard and to learn that hard is necessary to succeed.</p>
                    <p>In my free time, I like to train martial arts. I have been training in Brazilian Jujitsu and Boxing for the past 6 years and have earned a blue belt in Four-7 Combat Jujitsu. Training in martial arts has taught me to always stay humble and to never underestimate others or get too confident.
                    </p>
                </div>
                <div class="col-2">
                </div>
            </div>

            {/* <div className={`${classes.aboutMeContainer}`} id="aboutlink">
                <div className={classes.biography}>
                    <p>
                        I am new to the field of web development.  I recently graduated from DevMountain with a focus on the PERN stack and a solid understanding of functional programming. I have had the opportunity to build a couple of web applications (including this site).
            </p>
                    <p className={`text-center mb-5`}>
                        One of my favorite quotes is,"you reap what you sow."  This has been true throughout my entire life, as I come from a farming background. Ever since I was seven-years-old, my parents have taught me to work hard and to learn that hard is necessary to succeed. In my free time, I like to train martial arts. I have been training in Brazilian Jujitsu and Boxing for the past eight years and have earned a blue belt in Four-7 Combat Jujitsu. Training in martial arts has taught me to always stay humble and to never underestimate others or get too confident.
                    </p>
                </div>
            </div> */}
        </container>
    )
}

export default AboutMe