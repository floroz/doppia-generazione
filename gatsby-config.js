module.exports = {
  siteMetadata: {
    title: `Doppia Generazione`,
    description: `nasce con l'obiettivo di colmare un gap informativo e generazionale nel mondo dell'imprenditoria italiana, focalizzandosi su modelli di business duraturi e radicati ma, allo stesso tempo, sull'affermarsi di realtà imprenditoriali 2.0, vogliose di cambiamento e nuove opportunità`,
    author: `@floroz87`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Doppia generazione`,
        short_name: `@doppiagenerazione`,
        start_url: `/`,
        background_color: `#1d71b8`,
        theme_color: `#ffe966`,
        display: `minimal-ui`,
        icon: `src/images/doppiag-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
