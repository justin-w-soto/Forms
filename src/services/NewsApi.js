
export const fetchArticles = async () => {

const res = await fetch('https://newsapi.org/v2/everything?q=vampires&apiKey=${process.env.NewsApi_key}');
const articles = await res.json();

console.log('ARTICLES', articles);

return articles;
};
