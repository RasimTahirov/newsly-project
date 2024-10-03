import axios from 'axios';

const API_URL = 'https://api.currentsapi.services/v1/latest-news';
const API_KEY = '6tw1ED6gRz2tQEVdMBW9QFyp-wLB4ulNP-efqNgwHsJ5d-iL';

export const getNewsByCategory = async (category: string) => {
  try {
    const res = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        category: category,
      },
    });
    return res.data.news;
  } catch (error) {
    console.log(error);
  }
};
