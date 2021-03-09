import React from "react"
import MainLayoult from "../../templates/main-layoult";
import '../rekrutacja/kierunki-ksztalcenia.css'
import {Link} from "gatsby";


import {graphql} from "gatsby";

const PartnerzyPage = ({data, location, pageContext}) => {
    const partnerzy = data.partnerzy.edges;

    const {
        breadcrumb: { crumbs },
    } = pageContext;



    return (

        <MainLayoult location={location} crumbLabel="Partnerzy" crumbs={crumbs}>

            <div className={'aktualnosci-wrapper'}>

                <div className={'news-headline'}>
                    <span className={'news-title'}>NASI PARTNERZY</span>
                </div>

                <div className={'aktualnosci-content-wrapper'}>

                    {partnerzy.map(({node}) => {

                        return (
                            <div className={'single-job partner-wrapper'} key={node.nazwaPartnera}>
                                {node.nazwaPartnera}
                                <img src={node.logo.url} alt={'school_marker'}/>
                            </div>
                        )
                    })}

                </div>

            </div>


        </MainLayoult>

    )
}

export const query = graphql`
        query MyQuery8 {
            partnerzy: allDatoCmsPartnerzy(filter: {locale: {eq: "pl"}}) {
                edges {
                    node {
                        nazwaPartnera
                        logo {
                            url
                        }
                    }
                }
            }
}
`
;


export default PartnerzyPage