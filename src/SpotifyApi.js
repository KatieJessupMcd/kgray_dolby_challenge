import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

class SpotifyApi {
  // Get access token and set to local storage
  static async getAccessToken() {
    const response = await axios.get(`${BASE_URL}auth`);
    localStorage.setItem('token', response.data.access_token);
  }

  static async searchForArtistAlbum(query) {
    const response = await axios.get(`${BASE_URL}search`);
    console.log('HIT SEARCH ENPOINT');
    console.log(response);
  }
}

export default SpotifyApi;
