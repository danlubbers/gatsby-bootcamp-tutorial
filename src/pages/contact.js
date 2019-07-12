import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/Layout';

const Contact = () => {
    return (
        <Layout>   
            <h1>Contact Me</h1>
            <p>Hit me up on <a href="https://www.twitter.com/danlubbers" rel="noopener noreferrer" target="_blank">Twitter</a></p>
            <p><Link to="/">Back to Home</Link></p>
        </Layout>
    )
}

export default Contact;