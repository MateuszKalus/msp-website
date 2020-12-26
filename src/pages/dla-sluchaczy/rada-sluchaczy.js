import React from 'react'
import '../../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location}) => {


    return (
        <MainLayoult location={location} crumbLabel={'Rada sluchaczy'}>
            <div className={'silly-content-wrapper markdown-content '}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>

            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchRadaSluchaczy {
  info: datoCmsRadaSluchaczy {
    tre
    tytul
  }
}
`


export default BibliotekaPage;

