import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
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
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card-body p-1.25"></div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="albumNameInput"
                name="search"
                aria-describedby="searchForm"
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="Enter album keyword"
                required />
            </div>
            <button type="submit" value="submit" className="btn btn-info mb-3">
              SEARCH
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
