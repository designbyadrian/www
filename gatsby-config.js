const path = require("path")
const isDev = require("isdev")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Design by Adrian",
    description: "Designer Slash Developer",
    author: "Adrian von Gegerfelt",
    keywords: [
      "web development",
      "live events",
      "visualisation",
      "mobile",
      "programming",
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(__dirname, "src/assets/images"),
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:light,regular,bold"],
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        host:
          process.env.NODE_ENV === "development"
            ? "preview.contentful.com"
            : "cdn.contentful.com",
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: isDev,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          src: "src",
          components: "src/components",
          pages: "src/pages",
          assets: "src/assets",
          templates: "src/templates",
          utils: "src/utils",
        },
        extensions: ["js"],
      },
    },
  ],
}
