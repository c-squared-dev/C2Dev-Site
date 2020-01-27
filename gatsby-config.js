const config = require("./src/data/config");
const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname,`src`)
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'C-Squared Development',
        short_name: "C2Dev",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "./static/favicon/favicon-512.png"
      }
    },
    
    "gatsby-plugin-offline"
  ]
};
