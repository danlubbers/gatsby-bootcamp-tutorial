import React from "react"
import { Link } from 'gatsby';
import Layout from '../Components/Layout'
import Head from '../Components/Head';


const IndexPage = () => {
    return (
        <div>
           <Layout>
               <Head title="Home"/>
                <h2>I'm Dan, a full stack developer living in beautiful Upstate NY.</h2>
                <p>Want to know more About me, <Link to="/about">Click Here</Link></p>
                <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
           </Layout>
        </div>

    )
}

export default IndexPage
