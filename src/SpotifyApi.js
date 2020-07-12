import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

class SpotifyApi {
  static async getAccessToken() {
    const response = await axios.get(BASE_URL);
    localStorage.setItem('token', response.data.access_token);
    console.log('VVVVV');
    console.log(response.data.access_token);
    return response;
  }
}

export default SpotifyApi;
