const environment = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${environment}`
});

module.exports = {
  siteMetadata: {
    title: 'Design by Adrian',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        filetypes: {
          ".sass": { syntax: 'postcss-sass' },
        },
        exclude: '\/global\/',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"]
      }
    }
  ],
};
