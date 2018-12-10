import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className={classes.carousel} width="600px" autoPlay>
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
        );
    }
}

export default DemoCarousel