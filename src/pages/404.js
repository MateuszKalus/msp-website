import * as React from "react"
// import { Link } from "gatsby"
import MainLayoult from "../templates/main-layoult";

// markup
const IndexPage = ({location}) => {
  return (
    <MainLayoult location={location} crumbLabel="Strona nie istnieje">
      404
    </MainLayoult>
  )
}

export default IndexPage
