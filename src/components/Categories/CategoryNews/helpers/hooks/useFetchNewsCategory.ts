import { useEffect, useState } from 'react';
import { getNewsByCategory } from '../api/api';

export const useFetchNewsCategory = ({ category }: { category: string }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNewsByCategory(category);
      setNews(data);
    };

    fetchNews();
  }, [category]);

  return news;
};
