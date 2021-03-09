import React from "react"
import "./OneAdventage.css"

const OneAdventage = ({node}) => {

    return (
        <>
            <div className={'one-adventage-wrapper'}>
                <div className={'oaw-first-page'}>
                    <span>{node.naglowek}</span>
                    <img src={node.ikona.url}/>
                    <span>{node.podpis}</span>
                </div>
                <div className={'oaw-second-page'}>
                    <span dangerouslySetInnerHTML={{__html: node.opis}}></span>
                </div>

            </div>

        </>
    )
};


export default OneAdventage;