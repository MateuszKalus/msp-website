import React from 'react'
import './job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "./main-layoult";

const JobPage = ({pageContext: {slug}, data: {job}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={job.nazwaKierunku} crumbs={crumbs}>
            <div className={'silly-content-wrapper markdown-content'}>

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


export default JobPage;

