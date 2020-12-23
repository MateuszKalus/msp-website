import React from 'react'
import '../../templates/job-page.css'
import './dokumenty-do-pobrania.css'

import {graphql, Link} from 'gatsby'
import MainLayoult from "../../templates/main-layoult";

import ReactPlayer from "react-player";
import poster from "../../images/zdj_g@2x.png";


const DokumentyDoPobraniaPage = ({data: {pliki}, location}) => {

    const kategoria_szkola = pliki.edges.filter(({node}) => {
        if (node.kategoria==="Szkoła") {
            return true;
        } else {
            return false;
        }
    })

    const kategoria_KursyIInne = pliki.edges.filter(({node}) => {
        if (node.kategoria!=="Szkoła") {
            return true;
        } else {
            return false;
        }
    })

    return (
        <MainLayoult location={location} crumbLabel={'Dokumenty do pobrania'}>

            <div className={'silly-content-wrapper dokumenty-do-pobrania-content-wrapper'}>
                <h3>Szkoła:</h3>
                <ul>
                    {kategoria_szkola.map(({node}) => {
                        return <li><Link to={node.plik.url}>{node.tytul}</Link></li>
                    })}
                </ul>


                <h3>Kursy i inne:</h3>
                <ul>
                    {kategoria_KursyIInne.map(({node}) => {
                        return <li><Link to={node.plik.url}>{node.tytul}</Link></li>
                    })}
                </ul>

            </div>

        </MainLayoult>
    )
};

export const query = graphql`
query allDoPobrania {
  pliki: allDatoCmsPobierzDokumenty {
    edges {
      node {
        tytul
        kategoria
        plik {
          url
        }
        model {
          name
        }
      }
    }
  }
}
`


export default DokumentyDoPobraniaPage;
