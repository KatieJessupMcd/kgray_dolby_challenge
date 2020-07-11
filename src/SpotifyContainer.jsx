import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
// import './SpotifyContainer.css';

class SpotifyContainer extends Component {
  static defaultProps = {};
  render() {
    return <div className='SpotifyContainer'>
      {/* SearchForm */}
      <SearchForm />
      {/* Results Container */}
      <ResultsContainer />
      </div>;
  }
}

export default SpotifyContainer;