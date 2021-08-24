import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'
import Service from '../components/BigDataAnalysisStartup/Services'

const Services = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />
            <Service />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Services