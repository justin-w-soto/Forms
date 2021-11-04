import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticles } from '../services/NewsApi';



class NewsSearchContainer extends Component {
    state = {
        loading: true,
        articles: [],
    }
    

    render() { 
        return <h1>Loading...</h1>;
    }
}
 
export default NewsSearchContainer;