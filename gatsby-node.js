const path = require(`path`)


exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const blogPostTemplate = path.resolve('./src/templates/job-page.js');
    const result = await graphql(`
        query MyQuery2 {
  allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}) {
    edges {
      node {
        nazwaKierunku
        zawartoStrony
        jobSlug
      }
    }
  }
}
    `);
    result.data.allDatoCmsKierunki.edges.forEach(edge => {
        createPage({
            path: `rekrutacja/kierunki-ksztalcenia/${edge.node.jobSlug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.jobSlug
            },
        })
    })

}