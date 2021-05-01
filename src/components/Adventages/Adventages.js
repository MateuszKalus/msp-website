import React from "react"
import "./Adventages.css"
import OneAdventage from "./OneAdventage/OneAdventage";

const Adventages = ({data}) => {

    let generateAdventages = ({edges}) => {
        return (
            edges.map(obj => {
                    return (
                        <OneAdventage node={obj.node}/>
                    )
                }
            )
        )
    }

    return (
        <div className={'adventage-wrapper'}>
            <div className={'adventage-header'}>
                <p className={'adventage-header-main'}>PIĄTKA MEDYKA</p>
                <span>Najedź na ikony i przekonaj się, dlaczego warto być z nami:</span>
            </div>

            <div className={'adventages-content'}>
                {generateAdventages(data)}
            </div>

        </div>

    )
};


export default Adventages;