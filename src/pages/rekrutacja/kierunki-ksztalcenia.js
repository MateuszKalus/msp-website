import React from "react"
import MainLayoult from "../../templates/main-layoult";
import './kierunki-ksztalcenia.css'
import {Link} from "gatsby";


import {graphql} from "gatsby";

const KierunkiPage = ({data: {jobs}, location, pageContext}) => {
    const kierunki = jobs.edges;

    const {
        breadcrumb: { crumbs },
    } = pageContext;



    return (

        <MainLayoult location={location} crumbLabel="Kierunki kształcenia" crumbs={crumbs}>

            <div className={'aktualnosci-wrapper'}>

                <div className={'news-headline'}>
                    <span className={'news-title'}>KIERUNKI KSZTAŁCENIA</span>
                </div>

                <div className={'aktualnosci-content-wrapper'}>

                    {kierunki.map(({node}) => {

                        return (
                            <div className={'single-job'} key={node.jobSlug}>
                                <img src={'https://rcku.nazwa.pl/cms/sites/default/files/2021-05/school-24px%20%282%29.svg'} alt={'school_marker'}/>
                                <Link className={'single-job-link'} to={node.jobSlug}><h4>{node.nazwaKierunku}</h4></Link>
                            </div>
                        )
                    })}

                </div>

            </div>


        </MainLayoult>

    )
}

export const query = graphql`
        query MyQuery {
  jobs: allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}, filter: {locale: {eq: "pl"}}) {
    edges {
      node {
        nazwaKierunku
        zawartoStrony
        jobSlug
      }
    }
  }
}
`
;


export default KierunkiPage