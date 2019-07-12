import React from 'react';
import { graphql } from 'gatsby'; 
import Layout from '../Components/Layout';

// gatsby will grab this query and run it using export
export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug} }) {
          frontmatter {
            title
            date
          }
          html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            {/* dangerouslySetInnerHTML is used to set a markup from an html string */}
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog;