module.exports = {
  siteMetadata: {
    title: "MSP-website",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "9fad847465dac027ad4706570eb78d",
        preview: false,
        disableLiveReload: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
