import React from "react"

import "./ImportantMessage.css"

const ImportantMessage = ({data}) => {

    return (
        <div className={'important-wrapper'}>
            <h3>{data.nagWek}</h3>


            <p className={'important-info'}>
                <div dangerouslySetInnerHTML={{__html: data.trescKomunikatu}}/>
            </p>
            <p className={'important-message-sign'}>
                <div dangerouslySetInnerHTML={{__html: data.podpis}}/>
            </p>

        </div>

    )
}


export default ImportantMessage;