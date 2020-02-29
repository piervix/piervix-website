/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Piervincenzo Madeo",
    description: `
      Personal website of an enthusiast User Exeprience Designer and Creative Technologist
    `,
    siteUrl: "https://example.com",
    image: "https://lengstorf.com/images/jason-lengstorf.jpg",
    author: {
      name: "Piervincenzo Madeo",
      minibio: `
      From the South of Italy with a great love for creativity. 
      Head of User Experience at Foodracers. Former Creative Tech at AKQA Italy and UX Designer at @deltatre.
      `,
    },
    organization: {
      name: "Example, Inc.",
      url: "https://example.com",
      logo: "https://lengstorf.com/android-chrome-512x512.png",
    },
    social: {
      twitter: "@piervix",
      linkedIn: "piervix",
    },
    categories: [
      {
        slug: "test",
        name: "Test Category",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Piervincenzo`,
        short_name: `piervix`,
        start_url: `/`,
        background_color: `#ffff00`,
        theme_color: `#000000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/img/icon_pm.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
  ],
};
