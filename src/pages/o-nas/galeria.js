import React from 'react'
import '../../templates/job-page.css'
import './o-placowce.css'

import MyGallery from "../../components/MyGallery/MyGallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {graphql} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";


const GaleriaPage = ({data: {info}, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={"Galeria"} crumbs={crumbs}>
            <div className={'silly-content-wrapper'}>
                    <h3>Galeria</h3>
                {
                    info.edges.map(({node}) => {
                        return <div className={'single-gallery'}>

                            <MyGallery images={node.galeria}/>
                        </div>
                    })
                }


            </div>


        </MainLayoult>
    )
};

export const query = graphql`
query fetchGalerie {
  info: allDatoCmsGaleria1(filter: {locale: {eq: "pl"}}) {
    edges {
      node {
        galeria {
          url
        }
      }
    }
  }
}
`


export default GaleriaPage;

