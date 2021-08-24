import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'
import cloudInfo from '../components/ServiceDetails/cloudInfoSidebar'

const Cloud = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />
            <cloudInfo />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Cloud