import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            
          </div>
        </div> */}
        <div className="about__content">
          <p>
            Welcome to my portfolio! I am a full-stack web developer with a
            passion for creating user-friendly, responsive, and functional
            websites and web applications. My skills in front-end development
            allow me to design visually appealing and intuitive user interfaces,
            while my expertise in back-end development ensures that the web
            application is fast, reliable and scalable.
          </p>
          <a href="#contact"  className="btn btn-primary">
            Let's Talk
          </a>
        </div>
  
      </div>
    </section>
  );
};

export default About;
