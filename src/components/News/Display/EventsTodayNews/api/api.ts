import axios from 'axios';

const API_URL = 'https://newsdata.io/api/1/latest';
const API_KEY = '26b63662c18c4c60b4739cf65aa2df9c';

export const getTestNews = async () => {
  try {
    const res = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        size: 10,
        country: 'us',
        language: 'en',
        category: 'sports',
      },
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
