import React from 'react';
import {Link} from 'gatsby'
import ReactWOW from 'react-wow';

import Banner4Shape1 from '../../assets/images/main-banner/banner-four/banner-four-shape1.png'
import Banner4Shape2 from '../../assets/images/main-banner/banner-four/banner-four-shape2.png'
import Banner4Shape3 from '../../assets/images/main-banner/banner-four/banner-four-shape3.png'
import Banner4Shape4 from '../../assets/images/main-banner/banner-four/banner-four-shape4.png'
import Banner4Shape5 from '../../assets/images/main-banner/banner-four/banner-four-shape5.png'
import Banner4Shape6 from '../../assets/images/main-banner/banner-four/banner-four-shape6.png'
import Banner4Shape7 from '../../assets/images/main-banner/banner-four/banner-four-shape7.png'
import Banner4Shape8 from '../../assets/images/main-banner/banner-four/banner-four-shape8.png'
import Banner4Shape9 from '../../assets/images/main-banner/banner-four/banner-four-shape9.png'
import Banner4Shape10 from '../../assets/images/main-banner/banner-four/banner-four-shape10.png'
import Banner4MainImage from '../../assets/images/main-banner/banner-four/banner-four-main-img.png'

const MainBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Software Develpment and DevOps Consulting</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/about" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        About Us <span></span>
                                    </Link>
                                    <Link to="/services" className="default-btn">
                                        <i className="flaticon-tick"></i> 
                                        Get Started <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-animation-image">
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape1} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape2} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape3} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape4} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape5} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src={Banner4Shape6} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape7} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src={Banner4Shape8} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape9} alt="Banner4Shape" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={Banner4Shape10} alt="Banner4Shape" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src={Banner4MainImage} alt="Banner4MainImage" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;