import React from 'react'
import IMAGES from '../images/index.js'

function Projects(props) {
    return (
        <section id="projects" ref={props.refProjects}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={IMAGES.contactAppThumbnail}
                                alt="Contact Manager App"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Contact Manager</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://github.com/mikeprimak/ContactManagerApp', '_blank')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('/projects/ContactManagerApp', '_blank')}
                            >
                                Live Demo
                            </button> 
                        </div>
                       
                       <div className="projectDetails">
                       <br />
                       <ul>
                        
                        <li>Store Contact Information & Communicate with Contacts</li>
                        <br />
                        <li>Technologies:
                            <br />- React
                                                        
                        </li>
                        <br />
                        <li>Features:
                        <br />- Add, Edit, Delete Contacts
                        <br />- Store Name, Email, Phone Number & Image
                        
                        <br />- Make Phone Call 
                        <br />- Send Email
                         
                    
                            
                        </li>

                        
                        </ul>
                      </div>
                    </div>


                    
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={IMAGES.fightingTomatoesLogo}
                                alt="Fighting Tomatoes"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Fighting Tomatoes</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://github.com/mikeprimak/FightingTomatoesIndex', '_blank')}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://fightingtomatoes.com/', '_blank')}
                            >
                                Live Website
                            </button> 
                        </div>
                       
                       <div className="projectDetails">
                       <p>
                            <br />
                        <ul>
                        
                        <li>"Rotten Tomatoes" for UFC Fights.</li>
                        <br />
                        <li>Technologies:
                            <br />- HTML, CSS, Javascript
                            <br />- PHP, SQL, Relational Database
                            <br />- Bootstrap
                            
                        </li>
                        <br />
                        <li>Features:
                        <br />- Account Sign Up & Auth.
                        <br />- Login with Google or Facebook
                        <br />- Ratings & Comments
                        <br />- Search
                        <br />- Sliders 
                        <br />- REST API
                        <br />- Cron
                        <br />- Web Scraper
                        <br />- Personalized Recommendations

                        </li>

                        
                        </ul>
                        </p>
                      </div>
                    </div>






                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={IMAGES.meafordOsteopathyLogo}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Meaford Osteopathy</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://github.com/mikeprimak/MeafordOsteopathy', '_blank')}
                            >
                                Github  
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('/projects/MeafordOsteopathy', '_blank')}
                            >
                                Live Demo
                            </button>
                        </div>
                        <div className="projectDetails">
                       <p>
                       <br />
                       <ul>
                        
                        <li>Business Website for Health Clinic</li>
                        <br />
                        <li>Technologies:
                        <br />- HTML, CSS, & Javascript
                        <br />- 3rd party Integrations
                                                        
                        </li>
                        <br />
                        <li>Features:
                        
                        <br />- Presents business information such as location, contact information and nature of business.
                        <br />- Integrated Booking System
                        
                        </li>
                        <br />
                        <li>Client Testimonial:
                        
                        <br />"Mike built me a great website for my osteopathy clinic. Patients love it and I am very happy."
                            
                        </li>

                        
                        </ul>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <img
                src={IMAGES.arrow}
                alt="Arrow icon"
                className="icon arrow"
                onClick={props.goToContact}
            />
        </section>


    )
}

export default Projects
