import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      albumResult: ''
    };

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
    this.props.addAlbum(this.albumResult); 
    this.setState({value: '', albumResult: ''}); 
  }

  searchArtistAlbum(query) {
    const data = {
      q: query,
      type: 'album'
    };

    axios.get(`https://api.spotify.com/v1/search`, {params: data}, {headers: {Authorization: }})
      .then(res => {
        let albumData = res.data.albums.items[0]; 
        this.setState({albumResult: albumData}); 
        // console.log("VVV"); 
        // console.log(albumData);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;