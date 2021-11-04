import React from 'react';
import NewsSearchContainer from '../../containers/NewsSearchContainer';
import { fetchArticles } from '../../services/NewsApi';

export default function App() {
  return <NewsSearchContainer />;
};

