import React, {useEffect} from "react"
import "./main-layoult.css"
import Navbar from '../components/Navbar/Navbar'
import ContactBar from '../components/Footer/ContactBar/ContactBar'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const MainLayoult = ({children, location, crumbLabel, ...props}) => {


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
                labet:
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
                labet:
                    <>
                        Zawiercie
                    </>,
                web: 'https://www.facebook.com/Regionalne-Centrum-Kszta%C5%82cenia-Ustawicznego-w-Zawierciu-865775153521460/?fref=ts'
            }
        }
    ];

    useEffect(()=>{
        const breadcrumb = document.querySelector('.breadcrumb');

        if (location.pathname==='/') {
            breadcrumb.classList.remove('show');
        } else {
            breadcrumb.classList.add('show')
        }
    })

    return (
        <main>
            <header>
                <div className={'headerContent'}>
                    <h1>Medyczna Szkoła Policealna</h1>
                </div>

            </header>

            <Navbar/>
            <section>
                <div className={'section-content'}>
                    <Breadcrumb location={location} crumbLabel={crumbLabel} />
                    {children}

                </div>

            </section>

            <footer>
                <div className={'top-footer-section'}>
                    <ContactBar datas={datas[0]}/>
                    <ContactBar datas={datas[1]}/>
                </div>
                <div className={'bottom-footer-section'}>
                    <div className={'bottom-footer-section-label'}>
                        <span>Polityka prywatności i cookies</span>
                        <span>© KomDżaKal</span>
                    </div>

                </div>
            </footer>
        </main>
    )
}

export default MainLayoult;