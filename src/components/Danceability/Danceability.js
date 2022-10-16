import React from "react";

import "./Danceability.css";

class DanceAbility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 50,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.setDanceAbility = this.setDanceAbility.bind(this);
  }

  handleValueChange(event) {
    this.setState({ level: event.target.value });
  }

  setDanceAbility() {
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="DanceabilitySlider">
        <button type="button" class="btn btn-outline-secondary">
          Danceability
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Energy
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Chill
        </button>
        <label for="DanceabilitySlider" class="form-label">
          Danceability (higher the value the more danciness)
        </label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="100"
          step="5"
          id="DanceabilitySlider"
        ></input>
      </div>
    );
  }
}

export default DanceAbility;
