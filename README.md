# Design by Adrian dot com

It's rude digging through other people's code 😠

## Local

`$ gatsby develop`

**You also need these two files:**

📄 gatsby-config.js

```javascript
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
        spaceId: '?',
        accessToken: '?',
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

```

📄 .npmrc

```
@fortawesome:registry=https://npm.fontawesome.com/ACCESS_TOKEN
```

## Deploy

`$ gatsby build`
