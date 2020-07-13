import React, { Component } from 'react';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
    this.audio = new Audio(this.props.albumData.trackPreviewUrl);
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.load()
    audioEl.play()
  }

  render() {
    if (this.props.displayAlbum) {
      return (
        <div>
          <div
            className="ResultsContainer"
            id="album-cover"
            onClick={this.playAudio}
          >
            Album Name: {this.props.albumData.album.name}
            Album Image:{' '}
            <div>
              <img
                src={this.props.albumData.album.images[0].url}
                alt="albumImage"
                className="img-responsive"
              />
            </div>
            Album Preview URL: {this.props.albumData.trackPreviewUrl}
          </div>
          <div>
            <audio className="audio-element">
              <source src={this.props.albumData.trackPreviewUrl}></source>
            </audio>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ResultsContainer;
