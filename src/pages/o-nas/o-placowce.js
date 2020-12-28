import React from 'react'
import '../../templates/job-page.css'
import './o-placowce.css'

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

import ReactPlayer from "react-player";
import poster from "../../images/zdj_g@2x.png";


const OPlacowcePage = ({data: {info}, location}) => {
    return (
        <MainLayoult location={location} crumbLabel={info.tytul}>
            <div className={'silly-content-wrapper markdown-content'}>

                <div dangerouslySetInnerHTML={{__html: info.tresc}}/>

                <div className={'around-video'}>

                    <ReactPlayer width={'100%'} height={'auto'} controls={true} style={{margin: 'auto'}}
                                 url='https://www.datocms-assets.com/39399/1608741281-rcku-reklama.mp4'
                                 config={{
                                     file: {
                                         attributes: {
                                             poster: poster
                                         }
                                     }
                                 }}
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
}

`


export default OPlacowcePage;

