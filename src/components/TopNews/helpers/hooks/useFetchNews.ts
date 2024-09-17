import { useEffect, useState } from 'react';
import { getTopNews } from '../../api/api';

export const useFetchTopNews = () => {
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

export const useFetchAllNews = () => {
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
