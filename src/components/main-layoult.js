import React from "react"
import "./main-layoult.css"
import Navbar from "./Navbar/Navbar";

const MainLayoult = ({children, ...props}) => {


    return(
        <main>
            <header>
                <div className={'headerContent'}>

                </div>

            </header>
            <Navbar />
            <section>
                {children}

            </section>

            <footer>

            </footer>
        </main>
    )
}

export default MainLayoult;