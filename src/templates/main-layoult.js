import React, {useEffect, useState} from "react"
import "./main-layoult.css"
import Navbar from '../components/Navbar/Navbar'
import ContactBar from '../components/Footer/ContactBar/ContactBar'
import SlaskLogo from '../images/logo-slaskie-czarne@2x.png'
import BIPLogo from '../images/bip_logo.png'
import ContrastIcon from '../images/contrast_icon.png'

import {Breadcrumb} from 'gatsby-plugin-breadcrumb'
import {graphql, StaticQuery, Link, navigate} from "gatsby";


const MainLayoult = ({children, location, crumbLabel, crumbs, ...props}) => {

    let newCrumbs = crumbs.filter((item) => {
        return item.crumbLabel !== 'rekrutacja' && item.crumbLabel !== 'dla-sluchaczy' && item.crumbLabel !== 'o-nas'
    })


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
        daneadresowe: allDatoCmsDaneKontaktoweStopka {
      edges {
        node {
          email {
            adresEmail
            wyWietlanyAdresEmail
          }
          identyfikator
          adres {
            nazwaIAdresSzkoY
            linkDoGoogleMaps
          }
          facebook {
            wyWietlanaNazwa
            linkDoFacebooka
          }
          telefony {
            telefony
          }
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

                                <div id={'contrast-component'} onClick={changeContrastInLocalStorage}>
                                    <label htmlFor={'contrast-icon'}>WCAG:</label>
                                    <input id='contrast-icon' type="image" src={ContrastIcon}
                                           />
                                </div>

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
                            {
                                data.daneadresowe.edges.map((datas, index) => {
                                    return <ContactBar datas={data.daneadresowe.edges[index].node}/>
                                })

                            }
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