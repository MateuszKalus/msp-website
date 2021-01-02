import React from 'react'
import '../../templates/job-page.css'
import './biblioteka.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location}) => {
    return (
        <MainLayoult location={location} crumbLabel={'Biblioteka'}>
            <div className={'biblioteka silly-content-wrapper markdown-content'}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>
                {info.zdjecie && <img src={info.zdjecie.url} alt={info.zdjecie.url}/>}
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
        url
    }
  }
}
`


export default BibliotekaPage;

