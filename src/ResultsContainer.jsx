import React, { Component } from 'react';
import hitclipImg from './Hitclip1.png';
import blackSquare from './blackSquare.png';
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
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.load();
    audioEl.play();
  }

  render() {
    if (this.props.displayAlbum) {
      return (
        <div className="row mt-5">
          <div
            className="ResultsContainer col-sm-6 offset-sm-3 pt-4"
            onClick={this.playAudio}
          >
            <div
              className="container"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={this.props.albumData.album.images[0].url}
                alt="albumImage"
                className="albumImage"
                style={{
                  width: '42%',
                  marginLeft: '3.5%',
                  marginTop: '13%',
                }}
              />
              <div
                className="hitclip"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={hitclipImg}
                  alt="hitclipImg"
                  className="hitclipImg"
                  style={{ width: '100%', paddingRight: '-2%' }}
                />
              </div>
            </div>
          </div>
          <div>
            <audio className="audio-element">
              <source src={this.props.albumData.trackPreviewUrl}></source>
            </audio>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row mt-5">
          <div className="ResultsContainer col-sm-6 offset-sm-3 pt-4">
            <div
              className="container"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={blackSquare}
                alt="albumImage"
                className="albumImage"
                style={{
                  width: '42%',
                  marginLeft: '3.5%',
                  marginTop: '13%',
                }}
              />
              <div
                className="hitclip"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={hitclipImg}
                  alt="hitclipImg"
                  className="hitclipImg"
                  style={{ width: '100%', paddingRight: '-2%' }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ResultsContainer;
