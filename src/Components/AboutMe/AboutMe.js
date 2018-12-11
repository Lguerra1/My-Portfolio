import React from 'react';
import classes from './AboutMe.module.css';


const AboutMe = () => {

    return (
        <div className={classes.aboutMeContainer}id="aboutlink">
            <h1 className={classes.aboutMe} >About me</h1>
            <div className={classes.biography}>
                <p>
                    I am new to the field of web development, recently graduated from DevMountain. With a focus on the PERN stack and a solid understanding of functional programming I have had the opportunity
                    to build a couple of web applications(including this site).
            </p>
                <p>
                    One of my favorite quotes is "You reap what you sow". This has been true throughout my entire life, as I come from a farming background.
                    Ever since I was 7 years old, my parents have taught me to work hard and to learn that I get what I put in.
                    In my free time I like to train martial arts. I have been training in Brazilian Jujitsu and Boxing for the past 8 years and have earned a blue belt in Four-7 Combat Jujitsu.
                    Training in martial arts has taught me to always stay humble and to never underestimate others or get too confident.
                    </p>
            </div>
         
        </div>
    )

}

export default AboutMe