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
        icon: 'static/images/logo.png',
      },
    },
    'gatsby-transformer-remark',
    // source files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'survey',
        name: 'survey',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'README.md',
        name: 'surveyInfo',
      },
    },
  ],
};
