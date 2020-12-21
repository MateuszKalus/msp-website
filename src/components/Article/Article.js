import React from "react"
import "./Article.css"

const Article = ({opisKrotki, date, imgURL}) => {

    return (
        <div className={'article-wrapper'}>
            <div className={'article-content'}>
                <div className={'article-img'}>
                    <img src={imgURL}/>
                </div>
                <div className={'article-short-descr'}>
                    {opisKrotki}
                </div>
            </div>

            <div className={'article-date'}>
                {date}
            </div>
        </div>

    )
}


export default Article;