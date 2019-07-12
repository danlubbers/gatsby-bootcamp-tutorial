import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/Layout';

const About = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Bio Description</p>
            <p><Link to="/contact">Contact Me!</Link></p>
        </Layout>
    )
}

export default About;