require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Medyczna Szkoła Policealna Województwa Śląskiego`,
        siteUrl: `https://www.rcku.nazwa.pl`,
        description: `Dołącz do Medycznej Szkoły Policealnej!`,
        image: "/images/logo_rcku.png"
    },
    plugins: [
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-sharp`,
        `gatsby-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                // useAutoGen: required 'true' to use autogen
                useAutoGen: true,
                // autoGenHomeLabel: optional 'Home' is default
                autoGenHomeLabel: `Strona Główna`,
                // exlude: optional, include this array to overwrite paths you don't want to
                // generate breadcrumbs for.
                exclude: [
                    `/rekrutacja/`,
                    `/404/`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback/`,
                ],
                // crumbLabelUpdates: optional, update specific crumbLabels in the path
                crumbLabelUpdates: [
                    {
                        pathname: '/aktualnosci',
                        crumbLabel: 'Aktualności'
                    },
                    {
                        pathname: '/rekrutacja/kierunki-ksztalcenia',
                        crumbLabel: 'Kierunki kształcenia'
                    }
                ]
            }
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
                icon: "src/images/fav.png",
            },
        },
    ],
};
