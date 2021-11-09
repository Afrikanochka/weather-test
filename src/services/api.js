const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c000e4b7846c815cbcc4dfe6f1637bdf';

const weatherApi = name => {
  return fetch(
    `${BASE_URL}?q=${name}&lang=en&units=metric&appid=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      console.log(response)
      return response.json();
    }

    return Promise.reject(new Error(`City ${name} not found!`));
  }).then(data => data);
};

export default weatherApi;

export const currentWeather = () => {
  return fetch(
    `${BASE_URL}?q=Kyiv&lang=en&units=metric&appid=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      console.log(response)
      return response.json();
    }

    return Promise.reject(new Error(`City not found!`));
  }).then(data => data);
}

