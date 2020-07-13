import React, { Component } from 'react';
import SpotifyApi from './SpotifyApi';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist name:
          <input
            type="text"
            name= "search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
