import React, {useState, useEffect} from 'react';
import "./JoinUs.css"
import JoinUsImg from '../../images/zdj_g@2x.png'
import {Link} from 'gatsby'

import ReactTextTransition, {presets} from "react-text-transition";


const JoinUs = (props) => {
    const jobs = [
        {title: 'Technik elektroradiolog', adr: 'kierunki/onet.pl'},
        {title: 'Technik masażysta', adr: 'kierunki/wp.pl'},
        // 'Higienistka stomatologiczna',
        // 'Opiekun w domu pomocy społecznej',
        // 'Terapeuta zajęciowy',
        // 'Technik usług kosmetycznych',
        // 'Technik masażysta',
        // 'Higienistka stomatologiczna',
        // 'Technik sterylizacji medycznej',
        // 'Opiekun medyczny',
        // 'Asystent osoby niepełnosprawnej'
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
            <img src={JoinUsImg} alt={'mainImg'}/>

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