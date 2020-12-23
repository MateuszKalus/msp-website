import React from "react"
import "./Article.css"

const Article = ({opisKrotki, date, imgURL, classes}) => {

    return (
        <div className={classes}>
            <div className={'article-content'}>
                <div className={'article-img'}>
                    <img src={imgURL+'?ar=4:3&fit=crop&h=200'}/>
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