import React from 'react'
import '../../templates/job-page.css'
import './o-placowce.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

import ReactPlayer from "react-player";


const OPlacowcePage = ({data: {info, film}, location, pageContext}) => {

    const {
        breadcrumb: {crumbs},
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={info.tytul} crumbs={crumbs}>
            <div className={'silly-content-wrapper markdown-content'}>

                <div dangerouslySetInnerHTML={{__html: info.tresc}}/>

                <div className={'around-video'}>

                    <ReactPlayer width={'100%'} height={'auto'} controls={true} style={{margin: 'auto'}}
                                 url={film.linkDoFilmuPromocyjnego}
                    />

                </div>

            </div>


        </MainLayoult>
    )
};

export const query = graphql`
    query fetchOPlacowce {
        info: datoCmsOPlacowce {
            tytul
            tresc
        }
        film: datoCmsFilmPromocyjny {
            linkDoFilmuPromocyjnego
        }
    }

`


export default OPlacowcePage;

