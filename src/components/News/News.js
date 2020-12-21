import React from "react"
import {useStaticQuery, graphql} from "gatsby"

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
          zdjecie {
            url
          }
        }
      }
    }
  `)

    let generateArticles = (data) => {

        return (
            data.allDatoCmsNews.nodes.map(node => {
                    return <Article imgURL={node.zdjecie.url} opisKrotki={node.opisKrotki} date={node.meta.publishedAt}/>
                }
            )
        )
    }

    return (
        <div className={'news-wrapper'}>
            <div className={'news-headline'}>
                <span className={'news-title'}>AKTUALNOŚCI</span>
                <span className={'news-hyperlink'}>Przeczytaj wszystkie</span>
            </div>
            <div className={'news-content'}>
                {generateArticles(data)}
            </div>
        </div>

    )
}


export default News;