import axios from 'axios';

const API_URL_TOP = 'https://api.thenewsapi.com/v1/news/top?api_token';
const API_URL_ALL = 'https://api.thenewsapi.com/v1/news/all?api_token';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getTopNews = async () => {
  try {
    const res = await axios.get(API_URL_TOP, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        locale: 'us',
        language: 'en',
        limit: '3',
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNews = async () => {
  try {
    const res = await axios.get(API_URL_ALL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        locale: 'us',
        language: 'en',
        limit: '3',
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
