import React from "react";
import classes from "./Projects.module.css";
import main from "../../image/dealsourcemain.jpg";
import task from "../../image/tasklist.jpg";
import uniqueHome from "../../image/Capture.PNG";

const Projects = () => {
  return (
    <div className="container">
      <div className={classes.container} id="projectslink">
        <h1 className={`mt-5 mb-5 text-center display-3 ${classes.projects}`}>
          Projects
        </h1>
      </div>

      <h1 className="text-center mb-3">DealSource</h1>

      <div className="row">
        <div className="col-1" />
        <div className={`${classes.projectDescription} col-10`}>
          DealSource is clone of a website that sells tech products. However the
          difference between this site and the original is that the original
          site only links you to Amazon.com when you select a product. This
          website has a fully functional shopping cart that is being managed
          with Redux on the front end. A Heroku database on the back end using
          Massive and PostgreSQL to store and save a users shopping cart. I also
          used Stripe so that shoppers can purchase products with a credit card.
        </div>
        <div className="col-1" />
      </div>
      <p className="mt-3 text-center font-weight-bold">
        Live Site:{" "}
        <a target="_blank" href="http://dealsource.larryguerra.com">
          dealsource.larryguerra.com
        </a>
      </p>
      <p className="mt-3 text-center font-weight-bold">
        GitHub Repo:
        <a
          target="_blank"
          href="https://github.com/Lguerra1/personal-project-techdeal-source"
        >
          {" "}
          https://github.com/Lguerra1/personal-project-techdeal-source
        </a>
      </p>

      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-touch={true}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img src={main} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <h1 className={`text-center mt-5 mb-3`}>Funday.com</h1>
      <div className="row">
        <div className="col-1" />
        <div className={`${classes.projectDescription} col-10`}>
          Funday.com is a clone of Monday.com which is a project management
          tool. This was my first project working with a team of developers. I
          had the opportunity to be in charge of building the drag and drop
          tables that would manage the different tasks for users. Some of the
          technologies we used were React, NodeMailer, Redux, Dragula,
          PostgreSQL, Bootstrap, React Calendar. We also created test suites
          using Postman and Jest to ensure that endpoints and methods are all
          working properly.
        </div>
        <div className="col-1" />
      </div>
      <p className="mt-3 text-center font-weight-bold">
        Live Site:{" "}
        <a target="_blank" href="http://104.248.70.113:3010">
          Funday.com
        </a>
      </p>
      <p className="mt-3 text-center font-weight-bold">
        GitHub Repo:{" "}
        <a target="_blank" href="https://github.com/funday-force/funday.com">
          https://github.com/funday-force/funday.com{" "}
        </a>
      </p>

      <div
        id="carouselExampleControls2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-touch={true}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img src={task} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <h1 className={`text-center mt-5 mb-3`}>Unique Smart Home</h1>
      <div className="row">
        <div className="col-1" />
        <div className={`${classes.projectDescription} col-10`}>
          Unique Smart Home is a website I made for a friend of mine who
          installs smart home systems. I built this website for responsiveness
          and can be viewed on any device. A few of the technologies I used were
          react-scroll, styled-components, and pure-react-carousel. Since this
          is a purely static website I deployed it using Netlify's services for
          an easy automactic deploy.
        </div>
        <div className="col-1" />
      </div>
      <p className="mt-3 text-center font-weight-bold">
        Live Site:{" "}
        <a target="_blank" href="https://uniquesmarthome.netlify.app/">
          Unique Smart Home
        </a>
      </p>

      <div
        id="carouselExampleControls2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-touch={true}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img src={uniqueHome} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <h1 className={`text-center mt-5 mb-3`}>Studio Ghibli App</h1>
      <div className="row">
        <div className="col-1" />
        <div className={`${classes.projectDescription} col-10`}>
          Designed for mobile first, this is a small app that is communicating
          with two API's. The Studio Ghibli API to retrieve all the movie
          information and the TMDb API for the movie posters. This was a fun
          React project, using SemanticUI for the styling.
        </div>
        <div className="col-1" />
      </div>
      <p className="mt-3 text-center font-weight-bold">
        Live Site:{" "}
        <a target="_blank" href="https://studio-ghibli-iw4pfutcj.now.sh/#/">
          Studio Ghibli App
        </a>
      </p>
      <p className="mt-3 text-center font-weight-bold">
        GitHub Repo:{" "}
        <a target="_blank" href="https://github.com/Lguerra1/studio-ghibli">
          https://github.com/Lguerra1/studio-ghibli{" "}
        </a>
      </p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="mx-auto d-block embed-responsive-item"
          src="https://www.youtube.com/embed/wBkfvxW8uoo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        />
      </div>
    </div>
  );
};

export default Projects;
