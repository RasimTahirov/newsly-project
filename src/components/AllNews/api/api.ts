import axios from 'axios';

const API_URL = 'https://api.thenewsapi.com/v1/news/all?api_token';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getSportNews = async () => {
  try {
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        locale: 'us',
        language: 'en',
        limit: '3',
      },
    });
    const allNews = res.data.data;

    const sportNews = allNews.filter((news: any) => {
      return news.categories && news.categories.includes('sports');
    });

    return sportNews;
  } catch (error) {
    console.log(error);
  }
};
