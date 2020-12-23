import React from "react"
import MainLayoult from "../templates/main-layoult";
import './aktualnosci.css'
import {Link} from "gatsby";


import {graphql} from "gatsby";

const NewsPage = ({data, location}) => {
    const articles = data.allDatoCmsNews.edges;


    return (

        <MainLayoult location={location} crumbLabel="Aktualności">

            <div className={'aktualnosci-wrapper'}>

                <div className={'news-headline'}>
                    <span className={'news-title'}>AKTUALNOŚCI</span>
                </div>

                <div className={'aktualnosci-content-wrapper'}>

                    {articles.map(({node}) => {

                        return (
                            <div className={'single-article'}>
                                <h1>{node.tytul}</h1>
                                <div className={'single-article-content'}>
                                    {node.zdjecie && <img src={node.zdjecie.url}/>}
                                    <div className={'single-article-text markdown-content'}>
                                        <div dangerouslySetInnerHTML={{__html: node.trescNewsa}} />

                                    </div>
                                    <div className={'single-article-gallery'}>
                                        {node.dodatkoweObrazki && node.dodatkoweObrazki.map(({url}) => {
                                                return <img src={url}/>
                                            }
                                        )}
                                    </div>

                                </div>
                                <p className={'single-article-content-date'}>
                                    <span>{node.meta.createdAt}</span>
                                </p>
                            </div>
                        )
                    })}

                </div>

            </div>


        </MainLayoult>

    )
}

export const query = graphql`
query MyQuer {
  allDatoCmsNews(limit: 10, sort: {order: DESC, fields: meta___createdAt}) {
    edges {
      node {
        trescNewsaNode {
          internal {
            content
          }
        }
        id
        slug
        tytul
        meta {
            createdAt(difference: "", formatString: "DD-MM-YYYY")
         }
        trescNewsa
        zdjecie {
          url
        }
        dodatkoweObrazki {
          url
        }
      }
    }
  }
}
`;


export default NewsPage