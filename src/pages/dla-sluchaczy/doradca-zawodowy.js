import React from 'react'
import '../../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Doradca zawodowy'} crumbs={crumbs}>
            <div className={'silly-content-wrapper markdown-content '}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>
                <div className={'single-article-gallery'}>
                    {info.galeriaObrazkWDodatkowych.map(({customData}) => {
                        return <img src={customData.url} alt={customData.url} key={customData.url}/>
                    })}
                </div>
            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchDoradca {
  info: datoCmsDoradcaZawodowy {
    tre
    tytul
    galeriaObrazkWDodatkowych {
        customData
    }
  }
}
`


export default BibliotekaPage;

