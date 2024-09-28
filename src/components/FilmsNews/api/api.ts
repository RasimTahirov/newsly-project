import axios from 'axios';

const API_URL = 'https://api.currentsapi.services/v1/latest-news';
const API_KRY = '6tw1ED6gRz2tQEVdMBW9QFyp-wLB4ulNP-efqNgwHsJ5d-iL';

export const getFilmsNews = async () => {
  try {
    const res = await axios.get(API_URL, {
      params: {
        apiKey: API_KRY,
        category: 'movie',
      },
    });
    return res.data.news;
  } catch (error) {
    console.log(error);
  }
};
