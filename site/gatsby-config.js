/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Adventure House',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    { resolve: 'gatsby-source-filesystem', options: { path: './src/data/' } },
  ],
};
