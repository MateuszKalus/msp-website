import React from 'react'
import '../../templates/job-page.css'
import '../rekrutacja/dokumenty-do-pobrania.css'

import {graphql, Link} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";



const PlanZajecPage = ({data: {plany}, location}) => {

    return (
        <MainLayoult location={location} crumbLabel={'Plan zajęć'}>

            <div className={'silly-content-wrapper dokumenty-do-pobrania-content-wrapper'}>
                <h3>Plany zajęć:</h3>
                <ul>
                    {plany.edges.map(({node}) => {
                        return <li><Link to={node.planZajecWFormaciePdf.url}>{node.nazwaPlanu}</Link></li>
                    })}
                </ul>

            </div>

        </MainLayoult>
    )
};

export const query = graphql`
query getAllPlans {
  plany: allDatoCmsPlanyZaj(sort: {fields: nazwaPlanu}) {
    edges {
      node {
        nazwaPlanu
        planZajecWFormaciePdf {
          url
        }
      }
    }
  }
}
`


export default PlanZajecPage;

