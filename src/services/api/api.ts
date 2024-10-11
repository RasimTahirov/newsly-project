import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEYS;

export const fetchNews = async (category: string) => {
  try {
    const res = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        category,
      },
    });
    return res.data.news;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
