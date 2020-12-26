import React from 'react'
import '../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../templates/main-layoult";

const KursyISzkoleniaPage = ({data: {info}, location}) => {


    return (
        <MainLayoult location={location} crumbLabel={'Kursy i szkolenia'}>
            <div className={'silly-content-wrapper markdown-content'}>
                <div dangerouslySetInnerHTML={{__html: info.tre}}/>

            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchKursyISzkolenia {
  info: datoCmsKursyISzkoleniaPage {
    tre
    tytul
  }
}
`


export default KursyISzkoleniaPage;

