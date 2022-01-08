import React from "react"
import MainLayoult from "../templates/main-layoult";
import './index.css'

import News from "../components/News/News";
import JoinUs from "../components/JoinUs/JoinUs";
import MovieSector from "../components/MovieSector/MovieSector";
import ImportantMessage from "../components/ImportantMessage/ImportantMessage";

import Adventages from "../components/Adventages/Adventages";

import Img from 'gatsby-image'

import {graphql} from "gatsby";

const IndexPage = ({location, data, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;


    const jobs = data.allDatoCmsKierunki.edges.map(({node}) => {
        return {title: node.nazwaKierunku, adr: 'rekrutacja/kierunki-ksztalcenia/'+node.jobSlug}
    })

    return (
        <MainLayoult mainPage={true} location={location} crumbLabel="Strona Główna" crumbs={crumbs}>
            <JoinUs jobs={jobs} w1={data.datoCmsHasloNaBannerze.pierwszyWiersz} w2={data.datoCmsHasloNaBannerze.drugiWiersz} zdj={data.zdjglowne.edges[0].node.zdjCie.customData.url}/>
            <News />
            <Adventages data={data.adventages}/>
            <MovieSector movieurl={data.film.linkDoFilmuPromocyjnego}/>
            {data.komunikat.nagWek ? <ImportantMessage data={data.komunikat}/> : null}

        </MainLayoult>

    )
}

export const query = graphql`
query FetchJobs {
    allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}, filter: {locale: {eq: "pl"}}) {
        edges {
            node {
                nazwaKierunku
                jobSlug
            }
        }
    }
    datoCmsHasloNaBannerze {
        pierwszyWiersz
        drugiWiersz
    }
    adventages: allDatoCmsAdventage(sort: {fields: kolejnoscNieZmienia, order: ASC}, filter: {locale: {eq: "pl"}}) {
        edges {
            node {
                naglowek
                opis
                podpis
                ikona {
                    customData
                }
            }
        }
    }
    nazwazakladki: datoCmsONasInneNazwaZakAdki(locale: {eq: "pl"}) {
        nazwaZakAdki
    }
    komunikat: datoCmsKomunikatDyrektora(locale: {eq: "pl"}) {
        nagWek
        trescKomunikatu
        podpis
    }
    film: datoCmsFilmPromocyjny {
        linkDoFilmuPromocyjnego
    }
    zdjglowne: allDatoCmsZdjCieNaStronieGWnej(filter: {locale: {eq: "pl"}}) {
        nodes {
            id
        }
        edges {
            node {
                zdjCie {
                    customData
                }
            }
        }
    }
}
`;





export default IndexPage
