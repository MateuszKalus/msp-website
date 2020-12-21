import React, {useState, useEffect} from 'react';
import "./JoinUs.css"
import JoinUsImg from '../../images/zdj_g@2x.png'
import {Link} from 'gatsby'

import TextLoop from "react-text-loop";

// import ReactTextTransition, {presets} from "react-text-transition";




const JoinUs = (props) => {
    const jobs = [
        {title: 'Technik elektroradiolog', adr: '#1'},
        {title: 'Technik masażysta', adr: '#2'},
        {title: 'Higienistka stomatologiczna', adr: '#3'},
        {title: 'Opiekun w domu pomocy społecznej', adr: '#4'},
        {title: 'Terapeuta zajęciowy', adr: '#5'},
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
            {/*<Link to={jobs[counter].adr}>*/}

                <div className={'joinus-slicer'}>

                    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={3000} children={jobs.map(x=>x.title)}>

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