import React from 'react'
import { Helmet } from "react-helmet"
import logo from "../../assets/images/Sensory-Byte-Logo3.png";

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Sensorybyte</title>
                <meta name="description" content="Sensorybyte" />
                <meta name="og:title" property="og:title" content="Sensorybyte"></meta>
                <meta name="twitter:card" content="Sensorybyte"></meta>
                <link rel="icon" href={logo}></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
