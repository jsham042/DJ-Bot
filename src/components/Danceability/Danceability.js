import React from 'react';

import './Danceability.css';

class DanceAbility extends React.Component {
  constructor(props) 
  {
    super(props);

    this.state = {
        term: 50
      };
    
    this.handleValueChange = this.handleValueChange.bind(this);
    this.setDanceAbility = this.setDanceAbility.bind(this);
  }

  handleValueChange(event) {
    this.setState({value: event.target.value});
  }

  setDanceAbility() {
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="DanceabilitySlider">
        <label for="Danceability Slider" class="form-label">Danceability Level</label>
        <input type="range" class="form-range" min="0" max="100" step ="1" id="Danceability Slider"></input>
      </div>
    );
  }
}

export default DanceAbility;