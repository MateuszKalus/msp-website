import React from "react"
import "./MovieSector.css"
import ReactPlayer from "react-player";
import poster from "../../images/zdj_g@2x.png";
import {Link} from "gatsby";

const MovieSector = ({movieurl}) => {


    return (
        <div className={'moviesector-wrapper'}>
            <div className={'moviesector-bg-before'}>
                <div className={'moviesector-bg-inner'}>
                    <div></div>
                    <div className={"moviesector-bg-inner-fulfilled"}></div>
                    <div></div>
                </div>

            </div>
            <div className={'video-wrapper'}>
                <ReactPlayer width={'100%'} height={'auto'} controls={true}
                             url={movieurl}
                             config={{
                                 file: {
                                     attributes: {
                                         poster: poster
                                     }
                                 }
                             }}
                />
            </div>


            <div className={'moviesector-bg-after'}>
                <div className={'moviesector-bg-inner'}>
                    <div></div>
                    <div className={"moviesector-bg-inner-fulfilled"}>
                        <p>
                            Misją naszej szkoły jest przygotowanie absolwenta
                            do wzorowej pracy w nowoczesnej, zintegrowanej Europie.
                        </p>
                        <p>
                            I JESZCZE JEDNO - KSZTAŁCIMY <strong>BEZPŁATNIE!</strong>
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className={'moviesector-about'}>
                <Link to={'o-nas/o-placowce'}>Dowiedz się o nas więcej ></Link>
            </div>
        </div>

    )
}


export default MovieSector;