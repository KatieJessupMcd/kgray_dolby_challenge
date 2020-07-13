import React, { Component } from 'react';

class ResultsContainer extends Component {
  static defaultProps = {};
  render() {
    if (this.props.displayAlbum){
      return (
        <div className="ResultsContainer" id="album-cover">
        Album Name: {this.props.albumData.name}
        Album Image: <div><img src={this.props.albumData.images[0].url} alt="albumImage" className="img-responsive"/></div>
      </div> 
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default ResultsContainer;
