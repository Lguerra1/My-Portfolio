import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';

class DemoCarousel extends Component {
    render() {
        return (<div className={classes.projectsContainer}>
            <h2 className={classes.projectHeaders}>DealSource</h2>
            <p className={classes.projectDescription} >
                DealSource is clone of a website that sells tech products.  However the difference between this site and the original is that the original site only links you to Amazon.com when you select a product.  This website has a fully functional shopping cart that is being managed with Redux on the front end. A Heroku database on the back end using Massive and PostgreSQL to store and save a users shopping cart.  I also used Stripe so that shoppers can purchase products with a credit card.
               </p>
            <p style={{ fontWeight: 'bold' }}>Website: <a target="_blank" href="https://larryguerra.com">https://larryguerra.com</a></p>
            <p style={{ fontWeight: 'bold' }}>GitHub Repo:<a target="_blank" href="https://github.com/Lguerra1/personal-project-techdeal-source"> https://github.com/Lguerra1/personal-project-techdeal-source</a></p>
            <Carousel className={classes.carousel} width="700px" transitionTime={1000} >
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IlSb6FqKwClyw9CG%2F97EdyjsDW4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpeMWOLLunpUAWLX8GjQA7f--1EmHiEY7vfY_vKN8j2MOzLZf5agYUbhl4lWdI" />
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Xv5EaS951hivLpU%2F6WWdoSZ%2FbsA%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjtfZKJeeH1pkBEfi5SjQAxLL61SDSzFI60f4_teY9wjcLsdcL5agYUbhl4lWdI" />
                    <p className="legend">Shopping Cart</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=6jKddzf%2FXTM8qYSxs2GFimCCF5k%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjoeZWOKuChrUBFfC1TjQA6d721STfgF46_Koznddon2pTjJ5f5agYUbhl4lWdI" />
                    <p className="legend">Product Display</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=GnxZ3lDA%2FWHCY5fpzyhCEIw5JFY%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8fcDeLOb39kBELS1SjQAxe761SDbiRI7oIoO-eo133ZXtIZT5agYUbhl4lWdI" />
                    <p className="legend">Stripe Checkout</p>
                </div>
            </Carousel>
            <h2 className={classes.projectHeaders}>Funday.com</h2>
            <p className={classes.projectDescription} >
                Funday.com is a clone of Monday.com which is a project management tool.  This was my first project working with a team of developers.  I had the opportunity to be in charge of building the drag and drop tables that would manage the different tasks for users.  Some of the technologies we used were React, NodeMailer, Redux, Dragula, PostgreSQL, Bootstrap, React Calendar.  We also created test suites using Postman and Jest to ensure that endpoints and methods are all working properly.               </p>
            <p style={{ fontWeight: 'bold' }}>Website: <a target="_blank" href="http://104.248.70.113:3010">Funday.com</a></p>
            <p style={{ fontWeight: 'bold' }}>GitHub Repo:<a target="_blank" href="https://github.com/funday-force/funday.com">https://github.com/funday-force/funday.com </a></p>

            <Carousel className={classes.carousel} width="700px" transitionTime={1000}>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=tESQrhkdDXONgqzI3sA3sHxWvV8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjqK5SKeOP1pEAUcCsCjQA7fOy1EWPjQY68LYPmL9x5jJ-0IMb5agYUbhl4lWdI" />
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Z%2Fxkqec8QeSVU1TPUN2ShhJGpUg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi7f5TffOSorEBCLn5SjQA7Kbu1SDSwRo65LI3uf9twicSxcsH5agYUbhl4lWdI" />
                    <p className="legend">Team View</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=b1ZIjsmDRgLBgJmTxxBx%2F1rfDe4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6KsDXerTypkAWLC9QjQAwe-u1SDHgFI60I9u5dI912ZTsIpH5agYUbhl4lWdI" />
                    <p className="legend">Task Manager</p>
                </div>
            </Carousel>
        </div>
        );
    }
}

export default DemoCarousel