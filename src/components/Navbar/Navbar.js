import React from "react";
import "./Navbar.css";
import Logo from '../../images/logo_rcku.png';
import {graphql, useStaticQuery} from "gatsby";

const Navbar = (props) => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
            document.getElementById("navbar").style.width = '75vw';
        } else {
            document.getElementById("navbar").style.width = '100vw';
        }
    }

    return (
        <nav id={'navbar'}>
            <div className={'inner-navbar'}>
                <div className={'logo-navbar'}>
                    <img id={'logo-in-navbar'} src={Logo} alt={'logo'}/>
                </div>

                <div className={'navbar-content'}>
                    <div className="dropdown">
                        <a href={'#'}>
                            <div className="dropbtn">AKTUALNOŚCI</div>
                        </a>
                        <div className="dropdown-content">
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn">
                            <span>REKRUTACJA</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <a href="#">Ważne informacje</a>
                            <a href="#">Kierunki kształcenia</a>
                            <a href="#">Dokumenty do pobrania</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn">
                            <span>DLA SŁUCHACZY</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <a href="#">Plan zajęć</a>
                            <a href="#">Biblioteka</a>
                            <a href="#">Doradca finansowy</a>
                            <a href="#">Rada słuchaczy</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a href={'#'}>
                            <div className="dropbtn">KURSY I SZKOLENIA</div>
                        </a>

                        <div className="dropdown-content">
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn">
                            <span>O NAS</span>
                            <div className={'arrow'}></div>
                        </div>
                        <div className="dropdown-content">
                            <a href="#">O placówce</a>
                            <a href="#">Galeria</a>
                            <a href="#">RODO</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a href={'#'}>
                            <div className="dropbtn">KONTAKT</div>
                        </a>
                        <div className="dropdown-content">
                        </div>
                    </div>

                </div>




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