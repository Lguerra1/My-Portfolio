import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';

import cart from '../../image/dealsourcecart.jpg';
import main from '../../image/dealsourcemain.jpg';
import front from '../../image/frontpage.jpg';
import product from '../../image/productview.jpg';
import stripe from '../../image/stripe.jpg';
import task from '../../image/tasklist.jpg';
import team from '../../image/teamlist.jpg';

class DemoCarousel extends Component {
    render() {
        return (
            
            <div className={classes.projectsContainer}>
                <h1 className={classes.projectHeaders}>DealSource</h1>
                <p className={classes.projectDescription} >
                    DealSource is clone of a website that sells tech products.  However the difference between this site and the original is that the original site only links you to Amazon.com when you select a product.  This website has a fully functional shopping cart that is being managed with Redux on the front end. A Heroku database on the back end using Massive and PostgreSQL to store and save a users shopping cart.  I also used Stripe so that shoppers can purchase products with a credit card.
               </p>
                <p style={{ fontWeight: 'bold' }}>Website: <a target="_blank" href='http://dealsource.larryguerra.com'>dealsource.larryguerra.com</a></p>
                <p style={{ fontWeight: 'bold' }}>GitHub Repo:<a target="_blank" href="https://github.com/Lguerra1/personal-project-techdeal-source"> https://github.com/Lguerra1/personal-project-techdeal-source</a></p>
                <Carousel className={classes.carousel} width="500px" transitionTime={1000} >
                    <div>
                        <img src={main} />
                        <p className="legend">Home Page</p>
                    </div>
                    <div>
                        <img src={cart} />
                        <p className="legend">Shopping Cart</p>
                    </div>
                    <div>
                        <img src={product} />
                        <p className="legend">Product Display</p>
                    </div>
                    <div>
                        <img src={stripe} />
                        <p className="legend">Stripe Checkout</p>
                    </div>
                </Carousel>
                <h1 className={classes.projectHeaders}>Funday.com</h1>
                <p className={classes.projectDescription} >
                    Funday.com is a clone of Monday.com which is a project management tool.  This was my first project working with a team of developers.  I had the opportunity to be in charge of building the drag and drop tables that would manage the different tasks for users.  Some of the technologies we used were React, NodeMailer, Redux, Dragula, PostgreSQL, Bootstrap, React Calendar.  We also created test suites using Postman and Jest to ensure that endpoints and methods are all working properly.               </p>
                <p style={{ fontWeight: 'bold' }}>Website: <a target="_blank" href="http://104.248.70.113:3010">Funday.com</a></p>
                <p style={{ fontWeight: 'bold' }}>GitHub Repo: <a target="_blank" href="https://github.com/funday-force/funday.com">https://github.com/funday-force/funday.com </a></p>

                <Carousel className={classes.carousel} width="500px" transitionTime={1000}>
                    <div>
                        <img src={front} />
                        <p className="legend">Home Page</p>
                    </div>
                    <div>
                        <img src={team} />
                        <p className="legend">Team View</p>
                    </div>
                    <div>
                        <img src={task} />
                        <p className="legend">Task Manager</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel