
export const fetchArticles = async () => {

const res = await fetch('https://newsapi.org/v2/everything?q=lsd&apiKey=${process.env.NewsApi_key}');
const articles = await res.json();


return articles;
};
