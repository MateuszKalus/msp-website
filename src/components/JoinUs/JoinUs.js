import React, {useState, useEffect} from 'react';
import "./JoinUs.css"
import JoinUsImg from '../../images/zdj_g@2x.png'
import {Link} from 'gatsby'

import ReactTextTransition, {presets} from "react-text-transition";


const JoinUs = (props) => {
    const jobs = [
        {title: 'Technik elektroradiolog', adr: '#'},
        {title: 'Technik masażysta', adr: '#'},
        {title: 'Higienistka stomatologiczna', adr: '#'},
        {title: 'Opiekun w domu pomocy społecznej', adr: '#'},
        {title: 'Terapeuta zajęciowy', adr: '#'},
        {title: 'Technik usług kosmetycznych', adr: '#'},
        {title: 'Technik masażysta', adr: '#'},
        {title: 'Higienistka stomatologiczna', adr: '#'},
        {title: 'Technik sterylizacji medycznej', adr: '#'},
        {title: 'Opiekun medyczny', adr: '#'},
        {title: 'Asystent osoby niepełnosprawnej', adr: '#'},
    ]

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
                Dołącz do nas<br/><br/>
                trwa rekrutacja blablablaa<br/>
                jesteśmy super
            </div>
            <Link to={jobs[counter].adr}>

                <div className={'joinus-slicer'}>
                    <ReactTextTransition
                        text={jobs[counter].title}
                        order={jobs[counter].title}
                        spring={{stiffness: 50, damping: 20}}
                    />


                </div>
            </Link>
        </div>
    )
}


export default JoinUs;