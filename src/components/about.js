import React from 'react'
import IMAGES from '../images/index.js'

function About(props) {
    
    return (
        
<section id="about" ref={props.refAbout}>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container secondary-pic">
            <img
              src={IMAGES.mikeAndDaughter}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={IMAGES.experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>13+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img
                  src={IMAGES.education}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>B.A. Bachelors Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>

                I’m very ambitious front-end developer looking for a role in
                established company with the opportunity to work with the latest
                technologies on challenging and diverse projects.

              </p>
              <br />
              <p>
                I'm quietly confident, naturally curious, and perpetually working on improving my chops, one design problem at a time.

              </p>
              <br />
              <p>

                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter and son, an outdoors fanatic,
                fitness enthusiast, and tech-obsessed!!!

              </p>
            </div>
          </div>
        </div>
        <img
          src={IMAGES.arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={props.goToExperience}
        />
      </section>

        
    )
}

export default About



