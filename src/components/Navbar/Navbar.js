import React, {useEffect} from "react";
import "./Navbar.css";
import Logo from '../../images/logo_rcku.png';
import {graphql, Link, useStaticQuery} from "gatsby";

const Navbar = (props) => {

    if (typeof window !== `undefined`) {
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {

            if (typeof document.getElementById("navbar") != null) {
                if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
                    document.getElementById("navbar").style.width = '75vw';
                } else {
                    document.getElementById("navbar").style.width = '100vw';
                }
            }

        }
    }

    return (
        <nav id={'navbar'}>
            <div className={'inner-navbar'}>

                <li className={'dropdown-low'}>

                    <div className={'dropbtn-low'}>
                        <span>MENU</span>
                    </div>

                    <div className={'dropdown-content-low'}>
                        <ul className={'navbar-content navbar-low-resolution'}>
                            <li className="dropdown">
                                <Link to={'/aktualnosci'}>
                                    <div className="dropbtn">AKTUALNOŚCI</div>
                                </Link>
                                <div className="dropdown-content">
                                </div>
                            </li>

                            <li className="dropdown">
                                <div className="dropbtn">
                                    <span>REKRUTACJA</span>
                                    <div className={'arrow'}></div>
                                </div>
                                <div className="dropdown-content">
                                    <Link to={'/rekrutacja/wazne-informacje'}>Ważne informacje</Link>
                                    <Link to={'/rekrutacja/kierunki-ksztalcenia'}>Kierunki kształcenia</Link>
                                    <Link to={'/rekrutacja/dokumenty-do-pobrania'}>Dokumenty do pobrania</Link>
                                </div>
                            </li>

                            <li className="dropdown">
                                <div className="dropbtn">
                                    <span>DLA SŁUCHACZY</span>
                                    <div className={'arrow'}></div>
                                </div>
                                <div className="dropdown-content">
                                    <Link to={'/dla-sluchaczy/plan-zajec'}>Plan zajęć</Link>
                                    <Link to={'/dla-sluchaczy/biblioteka'}>Biblioteka</Link>
                                    <Link to={'/dla-sluchaczy/doradca-zawodowy'}>Doradca zawodowy</Link>
                                    <Link to={'/dla-sluchaczy/rada-sluchaczy'}>Rada słuchaczy</Link>
                                </div>
                            </li>

                            <li className="dropdown">
                                <Link to={'/kursy-i-szkolenia'}>
                                    <div className="dropbtn">KURSY I SZKOLENIA</div>
                                </Link>
                                <div className="dropdown-content">
                                </div>
                            </li>

                            <li className="dropdown">
                                <div className="dropbtn">
                                    <span>O NAS</span>
                                    <div className={'arrow'}></div>
                                </div>
                                <div className="dropdown-content">
                                    <Link to={'/o-nas/o-placowce'}>O placówce</Link>
                                    <Link to={'/o-nas/galeria'}>Galeria</Link>
                                    <Link to={'/o-nas/rodo'}>RODO</Link>
                                </div>
                            </li>

                            <li className="dropdown">
                                <Link to={'/kontakt'}>
                                    <div className="dropbtn">KONTAKT</div>
                                </Link>
                                <div className="dropdown-content">
                                </div>
                            </li>

                        </ul>
                    </div>


                </li>


                <div className={'logo-navbar'}>
                    <Link to={'/'}>
                        <img id={'logo-in-navbar'} src={Logo} alt={'logo'}/>
                    </Link>
                </div>

                <ul className={'navbar-content navbar-full-resolution'}>
                    <li className="dropdown">
                        <Link to={'/aktualnosci'}>
                            <div className="dropbtn">AKTUALNOŚCI</div>
                        </Link>
                        <div className="dropdown-content">
                        </div>
                    </li>

                    <li className="dropdown">
                        <div className="dropbtn">
                            <span>REKRUTACJA</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <Link to={'/rekrutacja/wazne-informacje'}>Ważne informacje</Link>
                            <Link to={'/rekrutacja/kierunki-ksztalcenia'}>Kierunki kształcenia</Link>
                            <Link to={'/rekrutacja/dokumenty-do-pobrania'}>Dokumenty do pobrania</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <div className="dropbtn">
                            <span>DLA SŁUCHACZY</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <Link to={'/dla-sluchaczy/plan-zajec'}>Plan zajęć</Link>
                            <Link to={'/dla-sluchaczy/biblioteka'}>Biblioteka</Link>
                            <Link to={'/dla-sluchaczy/doradca-zawodowy'}>Doradca zawodowy</Link>
                            <Link to={'/dla-sluchaczy/rada-sluchaczy'}>Rada słuchaczy</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link to={'/kursy-i-szkolenia'}>
                            <div className="dropbtn">KURSY I SZKOLENIA</div>
                        </Link>
                        <div className="dropdown-content">
                        </div>
                    </li>

                    <li className="dropdown">
                        <div className="dropbtn">
                            <span>O NAS</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <Link to={'/o-nas/o-placowce'}>O placówce</Link>
                            <Link to={'/o-nas/galeria'}>Galeria</Link>
                            <Link to={'/o-nas/rodo'}>RODO</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link to={'/kontakt'}>
                            <div className="dropbtn">KONTAKT</div>
                        </Link>
                        <div className="dropdown-content">
                        </div>
                    </li>

                </ul>


            </div>
        </nav>
    )
}


const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      allDatoCmsArticlemodel {
        edges {
          node {
            zawarto
          }
        }
      }
    }
  `)
    return <p>{data.allDatoCmsArticlemodel.edges[1].node.zawarto}</p>
}

export default Navbar;