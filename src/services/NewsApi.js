export const fetchArticles = async () => {

const res = await fetch('https://newsapi.org/v2/everything?q=${query}&apiKey=a03d2fb2d29047c19b981bcefb391a60');
const json = await res.json();

  return json.articles.map((article) => ({
    author: article.author ? article.author : '',
    title: article.title ? article.title : '',
    description: article.description ? article.description : '',
    image: article.urlToImage ? article.urlToImage : 'nope'
  }));
};
