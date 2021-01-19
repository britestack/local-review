import React, { Component } from 'react';
import styled from 'styled-components';
import Features from './Features.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

const StyledApp = styled.div`
  padding: .8rem;
  box-sizing: border-box;
  background-color: #ffffff;
  border: black solid 2px;
  width: 992px;
  height: 789px;
  .helpful_info{
    font-size: 16px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  .one {
    flex: 1;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this);
    this.getFeatures = this.getFeatures.bind(this);
  }
  getReviews() {
    axios.get('/reviews')
      .then(({ data: reviews }) => {
        this.setState({
          reviews
        })
      })
      .catch(err => console.log('error: ', err));
  }
  getFeatures() {
    axios.get('/features')
      .then(({ data: features }) => {
        this.setState({
          features
        })
      })
      .catch(err => console.log('error: ', err));
  }
  componentDidMount() {
    this.getReviews();
    this.getFeatures();
  }
  render() {
    return (
      <StyledWrapper>
        <div className="one"></div>
        <StyledApp>
          <h3>What Locals Say about Marina</h3>
          <div>At least 130 Trulia users voted on each feature</div>
          <Features features={this.state.features} />
          <div className="helpful_info">Learn more about our methodology</div>
          <Reviews reviews={this.state.reviews} />
        </StyledApp>
        <div className="one"></div>
      </StyledWrapper>
    )
  }
};

export default App;
