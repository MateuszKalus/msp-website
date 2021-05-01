import React from 'react'
import '../../templates/job-page.css'
import './biblioteka.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Biblioteka'} crumbs={crumbs}>
            <div className={'biblioteka silly-content-wrapper markdown-content'}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>
                {info.zdjecie && <img src={info.zdjecie.customData.url} alt={info.zdjecie.customData.url}/>}
                <div dangerouslySetInnerHTML={{__html: info.godzinyOtwarcia}}/>
            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchBiblioteka {
  info: datoCmsBiblioteka {
    tre
    tytul
    godzinyOtwarcia
    zdjecie {
        customData
    }
  }
}
`


export default BibliotekaPage;

