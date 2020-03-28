module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `💅🏻Highly resuable, flexible styles. Build with SASS、Storybook`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: '@kitwang/gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Merely.css',
        description: '💅🏻Highly resuable, flexible styles. Build with SASS、Storybook',
        sidebarCategories: {
          null: [
            'index'
          ],
          Utilities: [
            'utilities/grid',
            'utilities/border',
            'utilities/padding',
          ]
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
