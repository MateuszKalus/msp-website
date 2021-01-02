import React from "react"
import "./Article.css"

const Article = ({opisKrotki, date, imgURL, classes, tytul, counter}) => {

    return (
        <div className={classes}>
            <div className={'article-content'}>
                <div className={'article-img'}>
                    <img src={imgURL+'?ar=4:3&fit=crop&h=200'} alt={'article_img'+counter}/>
                </div>
                <div className={'article-short-descr'}>
                    <h3>{tytul}</h3>
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