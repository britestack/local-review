import React, { Component } from 'react';
import styled from 'styled-components';
import Features from './Features.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

const StyledApp = styled.div`
  font-family: 'Cabin', sans-serif;
  padding: .8rem;
  box-sizing: border-box;
  background-color: #f5f6f7;
  border: black solid 2px;
  /* width: 992px;
  height: 789px; */
  a {
    color: rgb(0, 120, 130);
    text-decoration: none;
  }
  .helpful_info{
    padding: 0px 0px 24px;
    font-size: 16px;
    display: block;
    color: rgb(59, 65, 68);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
  }
  .voteInfo {
    /* font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif; */
    color: rgb(59, 65, 68);
    padding: 0px 0px 24px;
  }
  h3 {
    /* font-family: TruliaSans; */
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: rgb(59, 65, 68);
    margin-top: 16px;
    margin-bottom: 12px;
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
          <div className="voteInfo">At least 130 Trulia users voted on each feature</div>
          <Features features={this.state.features} />
          <div className="helpful_info"><span className="link"><a href="#" >Learn more</a> about our methodology</span></div>
          <Reviews reviews={this.state.reviews} />
        </StyledApp>
        <div className="one"></div>
      </StyledWrapper>
    )
  }
};

export default App;
