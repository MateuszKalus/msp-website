import React from "react";
// import "./Navbar.css";
import Logo from '../../images/logo_rcku.png';
import { Link } from "gatsby";

import HamburgerIcon from "../../images/menu-24px.svg"
import HamburgerIconBlack from "../../images/menu-24px_black.svg"

const Navbar = (props) => {



    if (typeof window !== `undefined`) {

        if (localStorage.getItem('contrast')==='true') {
            require('./Navbar-contrast.css')
        } else {
            require('./Navbar.css')
        }

        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {

            if (document.getElementById("navbar") !== null) {
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
                        <span><img className={'hamburger-icon hamburger-white'} src={HamburgerIcon} alt={'hamburger_white'}/>
                        <img className={'hamburger-icon hamburger-black'} src={HamburgerIconBlack} alt={'hamburger_black'}/></span>
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
                                <div className="dropbtn" tabIndex="0">
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
                                    {/*<Link to={'/o-nas/rodo'}>RODO</Link>*/}
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

                    <li className="dropdown" tabIndex="0">
                        <div className="dropbtn">
                            <span>REKRUTACJA</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content"  tabIndex="0">
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
                            {/*<Link to={'/o-nas/rodo'}>RODO</Link>*/}
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


export default Navbar;