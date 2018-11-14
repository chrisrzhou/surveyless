module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'surveyless',
        short_name: 'surveyless',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#519EF7',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    }, // source files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/_data',
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'README.md',
        name: 'surveyInfo',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'confirmation.md',
        name: 'confirmation',
      },
    },
  ],
};
