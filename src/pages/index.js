import React from "react"
import MainLayoult from "../components/main-layoult";
import './index.css'

import News from "../components/News/News";
import JoinUs from "../components/JoinUs/JoinUs";
import MovieSector from "../components/MovieSector/MovieSector";
import ImportantMessage from "../components/ImportantMessage/ImportantMessage";

import ReactPlayer from 'react-player'

import poster from '../images/zdj_g@2x.png'

const IndexPage = () => {
    return (
        <MainLayoult mainPage={true}>
            <JoinUs />
            <News />
            <MovieSector />
            <ImportantMessage />
        </MainLayoult>

    )
}


export default IndexPage
