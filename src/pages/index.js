import React from "react"
import MainLayoult from "../components/main-layoult";
import './index.css'

import News from "../components/News/News";

import mainImg from "../images/zdj_g@2x.png"

// markup
const IndexPage = () => {
  return (
      <MainLayoult mainPage={true}>

          <img style={{width:100+'%'}} src={mainImg} alt={'mainimg'}/>

          <News/>
      </MainLayoult>

  )
}

export default IndexPage
