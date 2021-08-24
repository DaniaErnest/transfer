import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'
import DevopsInfo from '../components/ServiceDetails/DevopsInfo'

const Devops = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />
            <DevopsInfo />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Devops