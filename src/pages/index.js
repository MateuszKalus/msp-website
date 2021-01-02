import React from "react"
import MainLayoult from "../templates/main-layoult";
import './index.css'

import News from "../components/News/News";
import JoinUs from "../components/JoinUs/JoinUs";
import MovieSector from "../components/MovieSector/MovieSector";
import ImportantMessage from "../components/ImportantMessage/ImportantMessage";


import {graphql} from "gatsby";

const IndexPage = ({location, data}) => {
    const jobs = data.allDatoCmsKierunki.edges.map(({node}) => {
        return {title: node.nazwaKierunku, adr: 'rekrutacja/kierunki-ksztalcenia/'+node.jobSlug}
    })

    return (
        <MainLayoult mainPage={true} location={location} crumbLabel="Strona Główna">
            <JoinUs jobs={jobs} w1={data.datoCmsHasloNaBannerze.pierwszyWiersz} w2={data.datoCmsHasloNaBannerze.drugiWiersz}/>
            <News />
            <MovieSector />
            <ImportantMessage />
        </MainLayoult>

    )
}

export const query = graphql`
query FetchJobs {
    allDatoCmsKierunki(sort: {order: ASC, fields: nazwaKierunku}) {
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
  
}
`





export default IndexPage
