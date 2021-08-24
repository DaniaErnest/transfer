import React from 'react'
import DevopSidebar from './DevopsInfoSidebar'
import details1 from '../../assets/images/services/services-details1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import charts from '../../assets/images/services/charts.jpg'

const DevopsInfo = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src={details1} alt="about" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">DevOps</span>
                            <h3>About this Services</h3>
                            <p>
                            DevOps is an umbrella term for a collection of strategies 
                            and skills in managing software infrastructure and deployments. 
                            his approach seeks to bridge the steps of the software development
                            lifecycle into a more streamlined process from software development
                            all the way to a production deployment. Due to its importance 
                            in improving productivity and application stability, DevOps has 
                            gained immense importance among organizations and is rapidly being prioritized 
                            to plan proactive strategies to prevent downtime and improve costs

                            </p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src={project2} alt="about" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Advantage of DevOps</h3>
                                        <ul>
                                            <li>Improved communication & collaboration.</li>
                                            <li>Enjoy quick time to market and increased agility.</li>
                                            <li>Maintain business advantages.</li>
                                            <li>Improve efficiency and deliver high quality software.</li>
                                            <li>Enhanced security & stability.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h3>Technologies That We Use</h3>

                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Nagios
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Kubernetes
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Selenium
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Jenkins
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Docker
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Puppet
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Monit
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Vault
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Terraform
                                    </div>
                                </div>
                            </div>

                            <h3>Technologies That We Use</h3>
                            <ul className="technologies-features">
                                <li><span>Nagios</span></li>
                                <li><span>Kubernetes</span></li>
                                <li><span>Monit</span></li>
                                <li><span>Selenium</span></li>
                                <li><span>Jenkins</span></li>
                                <li><span>Vault</span></li>
                                <li><span>Docker</span></li>
                                <li><span>Terraform</span></li>
                                <li><span>Puppet</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <DevopSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DevopsInfo