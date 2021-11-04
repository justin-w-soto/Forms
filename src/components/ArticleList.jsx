import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default function ArticleList ({ articles }) {
    const articleList = articles.map(({ author, title, description, image }) => {

        <li key={`${author}-${title}`}>
            <Article author={author} title={title} description={description} image={image} />
        </li>
    });

    return <ul aria-label='articles'>{articleList}</ul>;
}

ArticleList.propTypes = {
    articles : PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })).isRequired
  };
