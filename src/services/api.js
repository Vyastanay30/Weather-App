import axios from 'axios';

const API_KEY = '04455c6431af341ce6e89d058fcd74c2';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error while calling the API:', error.message);
        return error.response;
    }
}
