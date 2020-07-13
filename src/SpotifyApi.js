import axios from 'axios';
// import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3001/';

class SpotifyApi {
  static async searchForArtistAlbum(query) {
    const response = await axios.get(`${BASE_URL}`, { params: {q: query}});  
    return response; 
  }
}

export default SpotifyApi;
