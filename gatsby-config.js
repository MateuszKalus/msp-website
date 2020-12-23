module.exports = {
    siteMetadata: {
        title: "MSP-website",
    },
    plugins: [
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                defaultCrumb: {
                    // location: required and must include the pathname property
                    location: {
                        pathname: "/",
                    },
                    // crumbLabel: required label for the default crumb
                    crumbLabel: "Strona Główna",
                    // all other properties optional
                    crumbSeparator: "   /   ",
                },
            },
        },
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "9fad847465dac027ad4706570eb78d",
                preview: false,
                disableLiveReload: false,
            },
        },
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
    ],
};
