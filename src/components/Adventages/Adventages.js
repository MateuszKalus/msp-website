import React from "react"
import "./Adventages.css"
import OneAdventage from "./OneAdventage/OneAdventage";
import {graphql} from "gatsby";

const Adventages = ({data}) => {

    let generateAdventages = ({edges}) => {
        // console.log(edges)
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
                PIĄTKA MEDYKA
                <span>czyli dlaczego warto być z nami...</span>
            </div>

            <div className={'adventages-content'}>
                {generateAdventages(data)}

                {/*<OneAdventage/>*/}
                {/*<OneAdventage/>*/}
                {/*<OneAdventage/>*/}
                {/*<OneAdventage/>*/}
                {/*<OneAdventage/>*/}


            </div>

        </div>

    )
};


export default Adventages;