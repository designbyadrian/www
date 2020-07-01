const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Design by Adrian`,
    description: `Designer Slash Developer`,
    author: `Adrian von Gegerfelt`,
    keywords: [
      "web development",
      "live events",
      "visualisation",
      "mobile",
      "programming",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src/assets/images"),
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Dense"],
          urls: [path.resolve(__dirname, "src/assets/fonts/fonts.css")],
        },
        google: {
          families: ["Lato:light,regular,bold"],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        host:
          process.env.NODE_ENV === "development"
            ? "preview.contentful.com"
            : "cdn.contentful.com",
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          src: path.resolve(__dirname, "src"),
          components: path.resolve(__dirname, "src/components"),
          pages: path.resolve(__dirname, "src/pages"),
          assets: path.resolve(__dirname, "src/assets"),
          templates: path.resolve(__dirname, "src/templates"),
        },
        extensions: ["js"],
      },
    },
  ],
}
