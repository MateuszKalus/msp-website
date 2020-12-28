import React from "react"
import "./MovieSector.css"
import ReactPlayer from "react-player";
import poster from "../../images/zdj_g@2x.png";

const MovieSector = (props) => {

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
                             url='https://www.datocms-assets.com/39399/1608526566-100000006492223992090072240218708198396691n.mp4'
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

        </div>

    )
}


export default MovieSector;