import React from "react"

import "./ImportantMessage.css"

const ImportantMessage = (props) => {

    return (
        <div className={'important-wrapper'}>
            <h3>KOMUNIKAT DYREKTORA RCKU</h3>


            <p className={'important-info'}>
                W REGIONALNYM CENTRUM KSZTAŁCENIA USTAWICZNEGO
                W SOSNOWCU I W ZAWIERCIU<br/>
                od 30 listopada 2020r. do 03 stycznia 2021r.<br/>
                OGRANICZA SIĘ FUNKCJONOWANIE PLACÓWKI.
            </p>
            <p className={'important-message-sign'}>Renata Dusza<br/>Dyrektor</p>
        </div>

    )
}


export default ImportantMessage;