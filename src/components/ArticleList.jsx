import React from 'react';
import Article from './Article';

export default function ArticleList ({ articles }) {
    const articleList = articles.map(({ author, title, description, urlToImage }) => {

        <li key={`${author}-${title}`}>
            <Article author={author} title={title} description={description} image={urlToImage} />
        </li>
    });

    return <ul aria-label='articles'>{articleList}</ul>;
}
