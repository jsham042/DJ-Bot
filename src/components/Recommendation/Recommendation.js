import React from 'react';

import './Recommendation.css';

class Recommendation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.makeRecommendation = this.makeRecommendation.bind(this);
  }
  

  makeRecommendation() {
    this.props.onRecommendation(this.state.term);
  }

  render() {
    return (
      <div className="Recommendation">
        <button className="Recommendation Button" onClick={this.makeRecommendation}>GET RECOMMENDATIONS</button>
       </div>
    );
  }
}

export default Recommendation;