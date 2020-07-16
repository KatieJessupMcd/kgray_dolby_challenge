import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

class SpotifyApi {
  static async search(query) {
    try {
      const response = await axios.get(`${BASE_URL}/`, { params: { q: query } });
      return response;
    } catch (err) {
      console.error('API Error:', err.response);
      let status = err.response.status;
      let message = err.response.statusText;
      throw new Error(
        `There was an error with status ${status} and message ${message}`
      );
    }
  }
}

export default SpotifyApi;
