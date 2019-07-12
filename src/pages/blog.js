import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
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
                        fields {
                            slug
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
                             <Link to={`/blog/${e.node.fields.slug}`}>
                                <h2>{e.node.frontmatter.title}</h2>
                                <p>{e.node.frontmatter.date}</p>
                             </Link>
                         </li>
                     )
                 }).reverse()}
         </ol>
        </Layout>
    )
}

export default BlogPage;