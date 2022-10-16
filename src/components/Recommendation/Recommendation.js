import React from 'react';
// import DanceAbility from '../Danceability/Danceability';

import './Recommendation.css';

class Recommendation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: 'pop',
    };

    this.makeRecommendation = this.makeRecommendation.bind(this);
    this.handleRecommendation = this.handleRecommendation.bind(this);
  }
  
  makeRecommendation() {
    this.props.onRecommendation(this.state.genre);
  }

  handleRecommendation(event)
  {
    this.setState({genre: event.target.value})
  }

  render() {
    return (
     <div className="Recommendation">
        <label for="genreList" class="form-label">Enter Genre</label>
        <input class="form-control" list="datalistOptions" id="genreaList" placeholder="Type to search..."> </input>
        <datalist id="datalistOptions">
          <option value="pop"> </option>
          <option value="r-n-b"> </option>
          <option value="reggaeton"> </option>
          <option value="edm"> </option>
          <option value="rock"> </option>
        </datalist>
      <button className="Recommendation Button" onClick={this.makeRecommendation}>GET RECOMMENDATIONS</button>
      </div>
        
    );
  }
}

export default Recommendation;