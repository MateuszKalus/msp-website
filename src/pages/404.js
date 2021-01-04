import * as React from "react"
import {Link, navigate} from "gatsby"
import MainLayoult from "../templates/main-layoult";

// markup
const ErrPage = ({location, pageContext}) => {

    if (typeof window !== `undefined`) {
        navigate("/");
    }

    const {
        breadcrumb: {crumbs},
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel="Strona nie istnieje" crumbs={crumbs}>
            404
        </MainLayoult>
    )
}

export default ErrPage
