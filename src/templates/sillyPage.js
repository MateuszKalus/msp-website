import React from 'react'
import './sillyPage.css'

import {graphql} from 'gatsby'
import MainLayoult from "./main-layoult";

const SillyPage = ({pageContext: {slug}, data: {job}, location}) => {
    return (
        <MainLayoult location={location} crumbLabel={job.nazwaKierunku}>
            <div className={'silly-content-wrapper'}>

                <div dangerouslySetInnerHTML={{__html: job.zawartoStrony}}/>
            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchJob($slug: String) {
    job: datoCmsKierunki(jobSlug: {eq: $slug}) {
        zawartoStrony
        nazwaKierunku
    }
}

`


export default SillyPage;

