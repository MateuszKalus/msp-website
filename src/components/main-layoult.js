import React from "react"
import "./main-layoult.css"
import Navbar from "./Navbar/Navbar";
import ContactBar from "./Footer/ContactBar/ContactBar";

const MainLayoult = ({children, ...props}) => {

    const datas = [
        {
            address:
                <>
                    Medyczna Szkoła Policealna<br/>
                    ul. Stalowa 9A<br/>
                    41-214 Sosnowiec
                </>,

            email:
                <>
                    rckumed@rcku.nazwa.pl
                </>,
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
            fb:
                <>
                    Sosnowiec
                </>
        },
        {
            address:
                <>
                    Medyczna Szkoła Policealna<br/>
                    oddział w Zawierciu<br/>
                    ul. Żabia 19B<br/>
                    42-400 Zawiercie
                </>,

            email:
                <>
                    medyk_zawiercie@poczta.onet.pl
                </>,
            phone:
                <>
                    (32) 671-21-01<br/>
                </>,
            fb:
                <>
                    Zawiercie
                </>
        }
    ]

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
                        <span>Copyright KalKom</span>
                    </div>

                </div>
            </footer>
        </main>
    )
}

    export default MainLayoult;