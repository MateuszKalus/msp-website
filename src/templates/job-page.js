import React from 'react'
import './job-page.css'

import ReactPlayer from "react-player";
import {graphql} from 'gatsby'
import MainLayoult from "./main-layoult";
import poster from "../images/zdj_g@2x.png";

const JobPage = ({pageContext: {slug}, data: {job}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={job.nazwaKierunku} crumbs={crumbs}>
            <div className={'silly-content-wrapper markdown-content'}>

                <div dangerouslySetInnerHTML={{__html: job.zawartoStrony}}/>

                {job.filmikPromocyjny?.url ? <div className={'job-video-wrapper'}>
                    <ReactPlayer width={'100%'} height={'auto'} controls={true}
                                 url={job.filmikPromocyjny?.url}
                                 config={{
                                     file: {
                                         attributes: {

                                         }
                                     }
                                 }}
                    />
                </div> : null }

            </div>
        </MainLayoult>
    )
};

export const query = graphql`
query fetchJob($slug: String) {
    job: datoCmsKierunki(jobSlug: {eq: $slug}, locale: {eq: "pl"}) {
        zawartoStrony
        nazwaKierunku
        filmikPromocyjny {
            url
        }
    }
}

`


export default JobPage;

