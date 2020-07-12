import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      albumResult: '',
      accessToken: '',
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
  searchArtistAlbum(query) {}

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
