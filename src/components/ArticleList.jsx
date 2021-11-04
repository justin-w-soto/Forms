import React from 'react';
import Article from './Article';

export default function ArticleList ({ articles }) {
    const articleList = articles.map(({ author, title, description }) => {

        <li key={`${author}-${title}`}>
            <Article author={author} title={title} description={description} />
        </li>
    });

    return <ul aria-label='articles'>{articleList}</ul>;
}
