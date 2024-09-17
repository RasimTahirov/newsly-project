import { useEffect, useState } from 'react';
import { getSportNews } from '../../api/api';

export const useFetchSportNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getSportNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return news;
};
