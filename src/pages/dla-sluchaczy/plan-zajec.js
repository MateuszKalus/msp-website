import React from 'react'
import '../../templates/job-page.css'
import '../rekrutacja/dokumenty-do-pobrania.css'

import {graphql, Link} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";



const PlanZajecPage = ({data: {plany}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Plan zajęć'} crumbs={crumbs}>

            <div className={'silly-content-wrapper dokumenty-do-pobrania-content-wrapper'}>
                <h3>Plany zajęć:</h3>
                <ul>
                    {plany.edges.map(({node}) => {
                        console.log(node.nazwaPlanu)
                        return <li key={node.nazwaPlanu}><a href={node.planZajecWFormaciePdf.customData.url}>{node.nazwaPlanu}</a></li>
                    })}
                </ul>

            </div>

        </MainLayoult>
    )
};

export const query = graphql`
query getAllPlans {
  plany: allDatoCmsPlanyZaj(sort: {fields: nazwaPlanu}, filter: {locale: {eq: "pl"}}) {
    edges {
      node {
        nazwaPlanu
        planZajecWFormaciePdf {
          customData
        }
      }
    }
  }
}
`


export default PlanZajecPage;

