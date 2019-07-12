import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../Components/Layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `);

    // console.log(data)

    return (
        <Layout>
            <h1>Blog</h1>
         <ol>  
                 {data.allMarkdownRemark.edges.map((e, i) => {
                     return (
                         <li key={i}>
                             <h2>{e.node.frontmatter.title}</h2>
                             <p>{e.node.frontmatter.date}</p>
                         </li>
                     )
                 }).reverse()}
         </ol>
        </Layout>
    )
}

export default BlogPage;