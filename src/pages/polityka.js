import React from 'react'
import '../templates/job-page.css'

import {graphql} from 'gatsby'
import MainLayoult from "../templates/main-layoult";

const PolitykaPage = ({data, location, pageContext}) => {

    const {
        breadcrumb: { crumbs },
    } = pageContext;

    return (
        <MainLayoult location={location} crumbLabel={'Polityka Prywatności'} crumbs={crumbs}>
            <div className={'silly-content-wrapper markdown-content'}>
                <div dangerouslySetInnerHTML={{__html: data.polityka.edges[0].node.zawarto}}/>

            </div>
        </MainLayoult>
    )
};

export const query = graphql`
    query fetchPolotykaPrywatnosci {
        polityka: allDatoCmsPolitykaPrywatnoCi(filter: {locale: {eq: "pl"}}) {
            edges {
                node {
                    zawarto
                }
            }
        }
    }
`


export default PolitykaPage;

