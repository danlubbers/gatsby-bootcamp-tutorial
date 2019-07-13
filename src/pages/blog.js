import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../Components/Layout';
import blogStyles from '../pages/blog.module.scss';
import Head from '../Components/Head';

const BlogPage = () => {
    // Pulling in query from Contentful API
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }  
        }  
    `);

    // Static way of pulling in the data from .md file
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // console.log(data)

    return (
        <Layout>
            <Head title="blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>  
                {data.allContentfulBlogPost.edges.map((e, i) => {
                    return (
                        <li className={blogStyles.post} key={i}>
                            <Link to={`/blog/${e.node.slug}`}>
                                <h2>{e.node.title}</h2>
                                <p>{e.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
        </ol>
        </Layout>


        // Static Way
        // <Layout>
        //     <h1>Blog</h1>
        //  <ol className={blogStyles.posts}>  
        //          {data.allMarkdownRemark.edges.map((e, i) => {
        //              return (
        //                  <li className={blogStyles.post} key={i}>
        //                      <Link to={`/blog/${e.node.fields.slug}`}>
        //                         <h2>{e.node.frontmatter.title}</h2>
        //                         <p>{e.node.frontmatter.date}</p>
        //                      </Link>
        //                  </li>
        //              )
        //          })}
        //  </ol>
        // </Layout>
    )
}

export default BlogPage;