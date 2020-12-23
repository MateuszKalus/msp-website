import React, {useState, useEffect} from 'react';
import "./JoinUs.css"
import JoinUsImg from '../../images/zdj_g@2x.png'
import {graphql, Link} from 'gatsby'

import TextLoop from "react-text-loop";

// import ReactTextTransition, {presets} from "react-text-transition";


const JoinUs = ({jobs}) => {

    const [counter, setCounter] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {

            if (counter === jobs.length - 1) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }

        }, 2000);
        return () => clearInterval(interval);
    }, [counter]);


    return (
        <div className={'joinus-wrapper'}>
            <img id={'joinus-img'} src={JoinUsImg} alt={'mainImg'}/>

            <div className={'joinus-label'}>
                <Link to={'/rekrutacja/wazne-informacje'}><div  id={'banner-link-to-info'}>Dołącz do nas</div></Link><br/><br/>
                trwa rekrutacja blablablaa<br/>
                jesteśmy super
            </div>
            {/*<Link to={jobs[counter].adr}>*/}

            <div className={'joinus-slicer'}>

                <TextLoop springConfig={{stiffness: 180, damping: 20}} interval={3000} children={jobs.map(x => x.title)}>

                    {jobs.map(item => (
                            <Link to={item.adr} style={{textDecoration: 'none', color: 'white'}}>{item.title}</Link>

                        )
                    )}

                </TextLoop>

            </div>

        </div>
    )
}



export default JoinUs;