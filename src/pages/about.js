import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/BigDataAnalysisStartup/AboutUsContent'

 
const AboutUs = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            />
            <AboutUsContent />
            <Footer />
        </Layout>
    );
}

export default AboutUs;