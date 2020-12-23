import React from "react"
import MainLayoult from "../templates/main-layoult";
import './index.css'

import News from "../components/News/News";
import JoinUs from "../components/JoinUs/JoinUs";
import MovieSector from "../components/MovieSector/MovieSector";
import ImportantMessage from "../components/ImportantMessage/ImportantMessage";

import ReactPlayer from 'react-player'

import poster from '../images/zdj_g@2x.png'
import {graphql} from "gatsby";

const IndexPage = ({location, data}) => {
    const jobs = data.allDatoCmsKierunki.edges.map(({node}) => {
        return {title: node.nazwaKierunku, adr: '/kierunki-ksztalcenia/'+node.jobSlug}
    })

    return (
        <MainLayoult mainPage={true} location={location} crumbLabel="Strona Główna">
            <JoinUs jobs={jobs}/>
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
}
`





export default IndexPage
