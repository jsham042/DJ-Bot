import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
<<<<<<< HEAD
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
=======
        <input onChange={this.handleNameChange} defaultValue={'[NAME PLAYLIST]'} />
        <TrackList tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onRemove={this.props.onRemove} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
>>>>>>> 2f2dcede79f20ef9f8a298fa9c2fb4b2afbc44a0
      </div>
    );
  }
}

export default Playlist;
