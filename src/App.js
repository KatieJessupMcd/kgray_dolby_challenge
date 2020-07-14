import React from 'react';
import SpotifyContainer from './SpotifyContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import background from './90paper.jpg'; 


function App() {
  return (
    <div className="App" style={{height: '100vh',  backgroundImage:`url(${background})` }}>
      <SpotifyContainer />
    </div>
  );
}

export default App;
