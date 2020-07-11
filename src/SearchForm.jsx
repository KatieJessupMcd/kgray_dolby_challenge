import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchArtistAlbum = this.searchArtistAlbum.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let query = this.state.value
    this.searchArtistAlbum(query);
   
  }

  searchArtistAlbum(query) {
    console.log(query);
    const data = {
      q: query,
      type: 'album'
    };

    // TODO where to save token
    axios.get(`https://api.spotify.com/v1/search`, {params: data}, {headers: {Authorization: }})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;