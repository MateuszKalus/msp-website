import React from 'react'
import '../../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

const WazneInformacjePage = ({data: {info}, location}) => {
    return (
        <MainLayoult location={location} crumbLabel={info.tytul}>
            <div className={'silly-content-wrapper markdown-content'}>

                <div dangerouslySetInnerHTML={{__html: info.tresc}}/>
            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query MyQuery2 {
  info: datoCmsWazneInformacje {
    slug
    tresc
    tytul
  }
}
`


export default WazneInformacjePage;

