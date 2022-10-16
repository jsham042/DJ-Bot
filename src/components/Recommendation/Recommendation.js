import React from 'react';
import DanceAbility from '../Danceability/Danceability';

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
        <label for="exampleDataList" class="form-label">Enter Genre</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
        <datalist id="datalistOptions">
            <option value="pop">
            <option value="r-n-b">
            <option value="reggaeton">
            <option value="edm">
            <option value="rock">
          </datalist>
          <button className="Recommendation Button" onClick={this.makeRecommendation}>GET RECOMMENDATIONS</button>
        </div>
    );
  }
}

export default Recommendation;