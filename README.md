## HitClips Player
by Katie Gray

The other day I was waxing nostalgic on the glory that was the HitClips player. If you are not familiar, the HitClips player was a digital audio player from 1999 that played ultra-lo-fi mono one-minute clips of pop songs. I spent many a minute as a youth with the single earbud in my ear, jamming out to short renditions of NSYNC. 

With this HitClips Player, you too can relive the magic! With HitClips player, you can search for an album keyword, and an album cover will appear. Once you click it, you can jam out to a 30 second clip like it’s 1999.


### Setup

To clone the repository, run: 

```
git clone https://github.com/KatieJessupMcd/kgray_dolby_challenge.git
```

Run the following command to install the necessary packages in the root folder: 

```
npm install
```

You will need to start the client and the server in seperate terminal tabs

To run the client: 

```
npm start
```

Open a new tab in the terminal with the shortcut, command T

To run the server:
```
nodemon server.js
```
The app should now be running in your browser

This project utilizes the Spotify Web API to query and load album data. Additionally, the application needs to be authorized in order to access the Spotify API. This application uses the *client credential* flow for authorization. You will need to log into [Spotify for Developers](https://developer.spotify.com/dashboard/login). There, you can go into your dashboard, create and app, and gain a `Client ID` and `Client Secret`. These are the values you will replace `CLIENT_ID` and `CLIENT_SECRET` in `server.js`. 
