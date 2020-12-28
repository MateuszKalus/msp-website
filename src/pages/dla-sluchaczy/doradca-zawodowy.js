import React from 'react'
import '../../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location}) => {


    return (
        <MainLayoult location={location} crumbLabel={'Doradca zawodowy'}>
            <div className={'silly-content-wrapper markdown-content '}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>
                <div className={'single-article-gallery'}>
                    {info.galeriaObrazkWDodatkowych.map(({url}) => {
                        return <img src={url}/>
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
        url
    }
  }
}
`


export default BibliotekaPage;
