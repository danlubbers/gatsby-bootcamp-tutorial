import React from 'react';
import { graphql } from 'gatsby'; 
import Layout from '../Components/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../Components/Head';


// gatsby will grab this query and run it using export for .md
// export const query = graphql`
//     query ($slug: String!) {
//         markdownRemark (fields: { slug: { eq: $slug} }) {
//           frontmatter {
//             title
//             date
//           }
//           html
//         }
//     }
// `

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`;

const Blog = (props) => {
    // This allows us to get and generate images in the blog post body
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                // We got these from graphQL playground 
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>

        // Static Old way 
        // <Layout>
        //     <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        //     <p>{props.data.markdownRemark.frontmatter.date}</p>
        //     {/* dangerouslySetInnerHTML is used to set a markup from an html string */}
        //     <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        // </Layout>
    )
}

export default Blog;