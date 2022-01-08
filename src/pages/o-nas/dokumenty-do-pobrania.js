import React from 'react'
import '../../templates/job-page.css'
import './dokumenty-do-pobrania.css'

import {graphql, Link} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";



const DokumentyDoPobraniaPage = ({data: {pliki}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Dokumenty do pobrania'} crumbs={crumbs}>

            <div className={'silly-content-wrapper dokumenty-do-pobrania-content-wrapper'}>
                <ul>
                    {pliki.edges.map(({node}) => {
                        return (<div className={'row'}>
                            <li key={node.plik.customData.url}><Link to={node.plik.customData.url}>{node.tytul}</Link></li>
                            <p>{node.opis}</p>
                            </div>
                        )
                    })}
                </ul>

            </div>

        </MainLayoult>
    )
};

export const query = graphql`
query allDoPobraniaONas {
  pliki: allDatoCmsPobierzDokumentyONasArticle(filter: {locale: {eq: "pl"}}) {
    edges {
      node {
        tytul
        opis
        plik {
          customData
        }
        model {
          name
        }
      }
    }
  }
}
`


export default DokumentyDoPobraniaPage;

