import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEYS;

const API_URL_WEATHER_BASE = import.meta.env.VITE_BASE_URL_WEATHER;
const API_KEY_WEATHER = import.meta.env.VITE_API_KEYS_WEATHER;

const API_KEY_WEATHER_FORECASE_TEST = import.meta.env
  .VITE_BASE_URL_WEATHER_FORECASE_BASE;

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

export const fetchWeather = async (city: string) => {
  const API_URL_WEATHER = `${API_URL_WEATHER_BASE}=${API_KEY_WEATHER}&q=${city}`;

  try {
    const res = await axios.get(API_URL_WEATHER);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchForecast = async (city: string) => {
  const API_URL_WEATHER_FORECAST = `${API_KEY_WEATHER_FORECASE_TEST}=${API_KEY_WEATHER}&q=${city}&days=3`;

  try {
    const res = await axios.get(API_URL_WEATHER_FORECAST);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
