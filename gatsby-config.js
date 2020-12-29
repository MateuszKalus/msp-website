require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Medyczna Szkoła Policealna`,
        siteUrl: `https://www.rcku.nazwa.pl`,
        description: `Dołącz do Medycznej Szkoły Policealnej!`,
        image: "/images/zdj_g@2x.png"
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
                apiToken: process.env.DATOCMD_API_TOKEN,
                preview: false,
                disableLiveReload: false,
            },
        },
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/logo_rcku.png",
            },
        },
    ],
};
