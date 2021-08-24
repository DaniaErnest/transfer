import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ContactInfo from '../components/BigDataAnalysisStartup/ContactInfo'
const Contact = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Contact" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact" 
            />
            <ContactInfo />
            <Footer />
        </Layout>
    );
}

export default Contact