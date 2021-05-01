import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

import "./News.css"

import Article from "../Article/Article";

const News = (props) => {

    const data = useStaticQuery(graphql`
    {
      allDatoCmsNews(limit: 3, sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
        nodes {
          meta {
            publishedAt(difference: "", formatString: "DD-MM-YYYY")
          }
          opisKrotki
          trescNewsa
          tytul
          slug
          zdjecie {
            customData
          }
        }
      }
    }
  `)


    let generateArticles = (data) => {
        let counter = 0;
        return (
            data.allDatoCmsNews.nodes.map(node => {
                    const article_name = 'mainpage_news';
                    counter += 1;

                    let pathToImg;
                    if (!node.zdjecie) {
                        pathToImg = 'https://rcku.nazwa.pl/cms/sites/default/files/2021-05/medycyna-pracy-vita-medica-1280x800.jpg';
                    } else pathToImg = node.zdjecie.customData.url;

                    return (
                        <Article classes={'article-wrapper'} key={article_name + counter} counter={counter} imgURL={pathToImg}
                                 opisKrotki={node.opisKrotki} tytul={node.tytul} date={node.meta.publishedAt}/>
                    )
                }
            )
        )
    }

    return (
        <div className={'news-wrapper'}>
            <div className={'news-headline'}>
                <span className={'news-title'}>AKTUALNOŚCI</span>
                <span className={'news-hyperlink'}>
                    <Link to={'/aktualnosci'}>Przeczytaj wszystkie</Link>
                </span>
            </div>
            <div className={'news-content'}>
                {generateArticles(data)}
            </div>
        </div>

    )
}


export default News;