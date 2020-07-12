import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
import SpotifyApi from './SpotifyApi';

class SpotifyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
    };
    this.addAlbum = this.addAlbum.bind(this);
  }

  addAlbum(album) {
    this.setState({ album: album });
  }

  componentDidMount() {
    window.addEventListener('load', SpotifyApi.getAccessToken());
  }

  render() {
    return (
      <div className="SpotifyContainer">
        <SearchForm addAlbum={this.addAlbum} />
        <ResultsContainer albumImg={this.state.album} />
      </div>
    );
  }
}

export default SpotifyContainer;
