import React from "react"
import MainLayoult from "../components/main-layoult";
import './index.css'

import News from "../components/News/News";
import JoinUs from "../components/JoinUs/JoinUs";


// markup
const IndexPage = () => {
    return (
        <MainLayoult mainPage={true}>
            <JoinUs/>

            <News/>
        </MainLayoult>

    )
}

export default IndexPage
