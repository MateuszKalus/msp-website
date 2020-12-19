import React from "react"
import "./Navbar.css"
import {graphql, useStaticQuery} from "gatsby"

const Navbar = (props) => {

    return (
        <div className={'navbar'}>

            <div className={'logo-navbar'}>
                LOGO
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