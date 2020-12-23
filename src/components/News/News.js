import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

import "./News.css"

import Article from "../Article/Article";

const News = (props) => {

    const data = useStaticQuery(graphql`
    {
      allDatoCmsNews(limit: 3, sort: {fields: meta___createdAt, order: DESC}) {
        nodes {
          meta {
            publishedAt(difference: "", formatString: "DD-MM-YYYY")
          }
          opisKrotki
          trescNewsa
          tytul
          slug
          zdjecie {
            url
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
                        pathToImg = 'https://www.datocms-assets.com/39399/1608351709-8073291-snake-texture.jpg';
                    } else pathToImg = node.zdjecie.url;

                    return (
                        <Article classes={'article-wrapper'} key={article_name + counter} imgURL={pathToImg}
                                 opisKrotki={node.opisKrotki} date={node.meta.publishedAt}/>
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