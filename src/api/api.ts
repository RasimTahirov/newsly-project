import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getTopNews = async () => {
  try {
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        locale: 'ru',
        language: 'ru',
        limit: '3',
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
