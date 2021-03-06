import React, {useEffect, useState} from "react"
import "./main-layoult.css"
import Navbar from '../components/Navbar/Navbar'
import ContactBar from '../components/Footer/ContactBar/ContactBar'
import SlaskLogo from '../images/logo-slaskie-czarne@2x.png'
import BIPLogo from '../images/bip_logo.png'

import {Breadcrumb} from 'gatsby-plugin-breadcrumb'
import {graphql, StaticQuery, Link, navigate} from "gatsby";


const MainLayoult = ({children, location, crumbLabel, crumbs, ...props}) => {

    let newCrumbs = crumbs.filter((item) => {
        return item.crumbLabel !== 'rekrutacja' && item.crumbLabel !== 'dla-sluchaczy' && item.crumbLabel !== 'o-nas'
    })

    const datas = [
        {
            address:
                {
                    label:
                        <>
                            Medyczna Szkoła Policealna<br/>
                            ul. Stalowa 9A<br/>
                            41-214 Sosnowiec
                        </>,
                    web: 'https://goo.gl/maps/B47PcqjuWV38Hnw68'
                },

            email:
                'rckumed@rcku.nazwa.pl'
            ,
            phone:
                <>
                    (32) 292-01-91<br/>
                    wew. 31 - Sekretariat Uczniowski<br/>
                    wew. 21 - Sekretariat Główny<br/>
                    wew. 20 - Kursy Kształcenia Zawodu<br/>
                    wew. 22 - Kierownik Szkolenia Praktycznego<br/>
                    wew. 25 - Dyrektor<br/>
                    wew. 27 - Wicedyrektor<br/>
                    wew. 23 - Księgowość, Kadry<br/>
                    wew. 24 - Główna Księgowa<br/>
                </>,
            fb: {
                label:
                    <>
                        Sosnowiec
                    </>,
                web: 'https://www.facebook.com/RCKUSOSNOWIEC/'
            }
        },
        {
            address:
                {
                    label:
                        <>
                            Medyczna Szkoła Policealna<br/>
                            oddział w Zawierciu<br/>
                            ul. Żabia 19B<br/>
                            42-400 Zawiercie
                        </>,
                    web: 'https://goo.gl/maps/TuqG7yUuJb2has5m7'
                },


            email:
                'medyk_zawiercie@poczta.onet.pl'
            ,
            phone:
                <>
                    (32) 671-21-01<br/>
                </>,
            fb: {
                label:
                    <>
                        Zawiercie
                    </>,
                web: 'https://www.facebook.com/Regionalne-Centrum-Kszta%C5%82cenia-Ustawicznego-w-Zawierciu-865775153521460/?fref=ts'
            }
        }
    ];


    useEffect(() => {

        const breadcrumb = document.querySelector('.breadcrumb');

        if (location.pathname === '/') {
            breadcrumb.classList.remove('show');
        } else {
            breadcrumb.classList.add('show')
        }

        handleContrast();
        console.log('gw');
    });

    const changeContrastInLocalStorage = async () => {
        if (localStorage.getItem('contrast') === 'true') {
            localStorage.setItem("contrast", "false");

        } else {
            localStorage.setItem("contrast", "true");

        }

        await window.location.reload(false);
    }

    const handleContrast = () => {

        if (localStorage.getItem('contrast') === 'true') {
            const html = document.querySelector('html');
            html.classList.add('dark-theme');

        }

    };


    return (
        <StaticQuery
            query={graphql`
      {
        nazwa: allDatoCmsNazwaSzkolyWNaglowku {
          edges {
            node {
              duzyGornyTekst
              malyDolnyTekst
            }
          }
        }
      }
    `}
            render={data => (
                <main>
                    <header>
                        <div className={'headerContent'}>
                            <div>
                                <Link to={'/'}><h1>{data.nazwa.edges[0].node.duzyGornyTekst}</h1></Link>
                                <Link to={'/'}><h4>{data.nazwa.edges[0].node.malyDolnyTekst}</h4></Link>
                                <button onClick={changeContrastInLocalStorage}>KONTRAST</button>

                            </div>

                            <div className={'headerContent-logos'}>
                                <a href={'https://www.slaskie.pl'} target="_blank"><img src={SlaskLogo}
                                                                                        alt={'slask_logo'}/></a>
                                <a href={'https://bip-slaskie.pl/mszsosn'} target="_blank"><img id={'bip_logo'}
                                                                                                src={BIPLogo}
                                                                                                alt={'bip_logo'}/></a>

                            </div>
                        </div>

                    </header>

                    <Navbar/>
                    <section>
                        <div className={'section-content'}>
                            {/*<Breadcrumb location={location} crumbLabel={crumbLabel} />*/}
                            <Breadcrumb
                                crumbs={newCrumbs}
                                crumbSeparator=" / "
                                crumbLabel={crumbLabel}

                            />

                            {children}

                        </div>

                    </section>

                    <footer>
                        <div className={'top-footer-section'}>
                            <span className={'top-footer-section-label'}>SKONTAKTUJ SIĘ Z NAMI:</span>
                            <ContactBar datas={datas[0]}/>
                            <ContactBar datas={datas[1]}/>
                        </div>
                        <div className={'bottom-footer-section'}>
                            <div className={'bottom-footer-section-label'}>
                                <span>Polityka prywatności i cookies</span>
                                <span>© Created by MDK</span>
                            </div>

                        </div>
                    </footer>
                </main>
            )}
        >

        </StaticQuery>


    )
};


export default MainLayoult;