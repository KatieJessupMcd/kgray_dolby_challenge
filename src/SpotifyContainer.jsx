import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
// import './SpotifyContainer.css';

class SpotifyContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      album: {}
    }
    this.addAlbum = this.addAlbum.bind(this); 
  }

  addAlbum(album) {
    this.setState({album: album})
  }

  render() {
    return <div className='SpotifyContainer'>
      {/* SearchForm */}
      <SearchForm addAlbum={this.addAlbum}/>
      {/* Results Container */}
      <ResultsContainer albumImg={this.state.album} />
      </div>;
  }
}

export default SpotifyContainer;