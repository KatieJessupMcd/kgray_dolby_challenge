const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const qs = require('querystring');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let client_id = 'CLIENT_ID';
let client_secret = 'CLIENT_SECRET';


const post_data = {
  grant_type: 'client_credentials',
};
const post_config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64'),
  },
};

// get token response
app.get('/', async function (req, res, next) {
  try {
    // make request to get access_token
    const access_token = await axios
      .post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(post_data),
        post_config
      )
      .then((response) => {
        console.log(`Status: ${response.status}`);
        console.log('Body: ', response.data);
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });

    let query = req.query.q;
    const getAlbumConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + access_token.access_token,
      },
      params: {
        q: query,
        type: 'album',
      }
    };
    // get album using access token
    let album = await axios
      .get(`https://api.spotify.com/v1/search`, getAlbumConfig)
      .then((r) => {
        let albumData = r.data.albums.items[0]; 
        return albumData;
      })
      .catch((err) => {
        console.error(err);
      });
      
      const albumId = album.id; 
      // todo query album track info
      const getTrackConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + access_token.access_token,
        }
      };

      let trackPreviewUrl = await axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, getTrackConfig)
      .then((r) => { 
        let trackData = r.data.tracks.items[0].preview_url
        return trackData; 
      })
      .catch((err) => {
        console.error(err);
      });

      // VV what we send back to the client after all those calls are complete
    res.send({album: album, trackPreviewUrl: trackPreviewUrl});
  } catch (e) {
    return next(e);
  }
});

app.listen(3001, () => console.log('Server started on 3001'));
