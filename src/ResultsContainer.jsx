import React, { Component } from 'react';

class ResultsContainer extends Component {
  static defaultProps = {};
  render() {
    if (this.props.displayAlbum){
      return (
        <div className="ResultsContainer" id="album-cover">
        Album Name: {this.props.albumData.album.name}
        Album Image: <div><img src={this.props.albumData.album.images[0].url} alt="albumImage" className="img-responsive"/></div>
        Album Preview URL: {this.props.albumData.trackPreviewUrl}
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
