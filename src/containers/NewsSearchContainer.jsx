import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticles } from '../services/NewsApi';
import Search from '../components/Search';



class NewsSearchContainer extends Component {
    state = {
        loading: true,
        articles: [],
        query: ''
    }
    
    async componentDidMount() {
        const articles = await fetchArticles();
        this.setState({
          articles,
          loading: false,
        });
      }

    handleInputChange = (event) => {
        this.setState({ query: event.target.value });
      }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const articles = await fetchArticles(this.state.query);
        this.setState({ articles, loading: false });
        console.log(articles);
      }
    
      render() {
        const { articles, loading, query } = this.state;
        return (
          <>
            { loading ? <h1>Loading...</h1> :
            <>
                <Search
                  query={query} 
                  onChange={this.handleInputChange} 
                  onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} /> 
            </> }
          </>
        );
      }
    }
    
 
export default NewsSearchContainer;