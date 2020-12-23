import React from "react"
import MainLayoult from "../../templates/main-layoult";
import './kierunki-ksztalcenia.css'
import {Link} from "gatsby";


import {graphql} from "gatsby";

const KierunkiPage = ({data: {jobs}, location}) => {
    const kierunki = jobs.edges;


    return (

        <MainLayoult location={location} crumbLabel="Kierunki kształcenia">

            <div className={'aktualnosci-wrapper'}>

                <div className={'news-headline'}>
                    <span className={'news-title'}>KIERUNKI KSZTAŁCENIA</span>
                </div>

                <div className={'aktualnosci-content-wrapper'}>

                    {kierunki.map(({node}) => {

                        return (
                            <div className={'single-job'}>
                                <img src={'https://www.datocms-assets.com/39399/1608747085-school-24px.svg'}/>
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
  jobs: allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}) {
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