const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const qs = require('querystring');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client_id = 'CLIENT_ID';
const client_secret = 'CLIENT_SECRET';

app.get('/', async function (req, res, next) {
  try {
    // Set up headers/data for access token request
    let postData = {
      grant_type: 'client_credentials',
    };
    let postConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          new Buffer(client_id + ':' + client_secret).toString('base64'),
      },
    };

    // Get access token
    let accessToken = await axios
      .post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(postData),
        postConfig
      )
      .then((response) => {
        return response.data.access_token;
      })
      .catch((err) => {
        console.error(err);
      });

    // Use access token in header to query album and set up params
    let getAlbumConfig = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      params: {
        q: req.query.q,
        type: 'album',
      },
    };

    // Get queried album
    let album = await axios
      .get(`https://api.spotify.com/v1/search`, getAlbumConfig)
      .then((r) => {
        let albumData = r.data.albums.items[0];
        return albumData;
      })
      .catch((err) => {
        console.error(err);
      });

    // Use access token in header to query track
    const trackConfig = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    };

    // Get the preview url of the first track on album
    let trackPreviewUrl = await axios
      .get(`https://api.spotify.com/v1/albums/${album.id}`, trackConfig)
      .then((r) => {
        let trackData = r.data.tracks.items[0].preview_url;
        return trackData;
      })
      .catch((err) => {
        console.error(err);
      });

    // Return album and trackPreviewUrl to client
    res.json({ album: album, trackPreviewUrl: trackPreviewUrl });
  } catch (e) {
    return next(e);
  }
});

app.listen(3001, () => console.log('Server started on 3001'));
