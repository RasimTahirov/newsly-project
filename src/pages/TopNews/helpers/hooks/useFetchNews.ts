import { useEffect, useState } from 'react';
import { getTopNews } from '../../../../api/api';

export const useFetchNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getTopNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return news;
};
