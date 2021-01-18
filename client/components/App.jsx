import React, { Component } from 'react';
import styled from 'styled-components';
import Features from './Features.jsx';
import Review from './Review.jsx';
import axios from 'axios';

const StyledApp = styled.div`
  background-color: #ffffff;
  border: black solid 2px;
  /* color:#3b4144;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.1px;
  line-height: 24px; */
  color:#3b4144;
font-family:TruliaSans;
font-size:24px;
font-weight:700;
line-height:36px;
text-align:left;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: []
    }
  }
  componentDidMount() {
    axios.get('/features')
      .then(({ data: features }) => {
        this.setState({
          features
        })
      })
  }
  render() {
    return (
      <StyledApp>
        <h3>What Locals Say about Marina</h3>
        <Features features={this.state.features} />
        <Review />
      </StyledApp>
    )
  }
};

export default App;
