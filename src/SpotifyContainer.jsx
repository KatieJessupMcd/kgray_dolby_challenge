import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
import SpotifyApi from './SpotifyApi';

class SpotifyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: {},
      displayAlbum: false
    };
    this.searchAlbums = this.searchAlbums.bind(this);
  }

  async searchAlbums(query) {
    let queryResult = await SpotifyApi.searchForArtistAlbum(query);
    this.setState({
      albumData: queryResult.data,
      displayAlbum: true
    });
  }

  render() {
    return (
      <div className="SpotifyContainer container-fluid">
        <SearchForm handleSearch={this.searchAlbums} />
        <ResultsContainer displayAlbum={this.state.displayAlbum} albumData={this.state.albumData} />
      </div>
    );
  }
}

export default SpotifyContainer;
