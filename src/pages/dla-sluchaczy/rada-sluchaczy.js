import React from 'react'
import '../../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const BibliotekaPage = ({data: {info}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Rada sluchaczy'} crumbs={crumbs}>
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

