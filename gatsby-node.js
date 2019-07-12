const path = require('path');

// onCreateNode creates the slug for the blog
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node , undefined, 4))
        // console.log('@@@@@@@@@@@@@', slug)

        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })

    }
}

// CreatePages dynamically creates the blog pages
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    // 1. Get Path to Template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // 2. Get markdown data
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        // 3. Create new pages
        // This will run twice creating 2 new pages /react and /gatsby
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })


}