import React from 'react'
import {Link} from 'gatsby'
import cloudcom from '../../assets/images/services/cloudcom.jpg'
import devop from '../../assets/images/services/devop.png'
import Service1 from '../../assets/images/services/Service1.png'
import ServiceShape4 from '../../assets/images/services/service-shape4.png'

const Services = () => {
    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Services We Can Help You With</h2>
                    <p><h5>
                     We provide industry leading standards in development and QA 
                        services that power your business with speed, quality, innovation,
                        and productivity.
                        <br />
                        <br />
                        Our teams can provide expertise in important areas like DevOps,
                        Cloud Computing and Software Developmemt to build, automate and
                        scale your business.
                        </h5>
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={cloudcom} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/cloud">
                                    Cloud Computing
                                </Link>
                            </h3>
                            <p><strong>Cloud Computing</strong> allows people to access various data
                             & applications through internet.
                            </p>

                            <Link to="/cloud" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={devop} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/devops">
                                    DevOps
                                </Link>
                            </h3>
                            <p><strong>DevOps</strong> is an umbrella term for a collection of strategies and
                             skills in managing software infrastructure and deployments.</p>
                            
                            <Link to="/devops" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={Service1} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/softwaredev">
                                   Software Developmemt
                                </Link>
                            </h3>
                            <p><strong>Software development</strong> services are aimed at designing,
                             engineering, deploying,supporting, and evolving various software types.</p>
                            
                            <Link to="/softwaredev" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;