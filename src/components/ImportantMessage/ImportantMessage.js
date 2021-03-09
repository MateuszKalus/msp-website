import React from "react"

import "./ImportantMessage.css"

const ImportantMessage = ({data}) => {

    return (
        <div className={'important-wrapper'}>
            <h3>{data.nagWek}</h3>


            <p className={'important-info'}>
                <div dangerouslySetInnerHTML={{__html: data.trescKomunikatu}}/>
            </p>

            <div className={'important-message-sign'} dangerouslySetInnerHTML={{__html: data.podpis}}></div>

        </div>

    )
}


export default ImportantMessage;