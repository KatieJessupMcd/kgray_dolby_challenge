import React, { Component } from 'react';
import SpotifyApi from './SpotifyApi';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      albumResult: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchArtistAlbum = this.searchArtistAlbum.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('here');
    let query = this.state.value;
    this.searchArtistAlbum(query);
    this.props.addAlbum(this.albumResult);
    this.setState({ value: '', albumResult: '' });
  }

  // TODO grab inputs from from to query spotify api endpoint, also need to add that endpoint on proxy server
  async searchArtistAlbum(query) {
    let result = await SpotifyApi.searchForArtistAlbum(query); 
    console.log("we got the result on the front end");
    console.log(result); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
