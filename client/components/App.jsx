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
        console.log(this.state.features);
      })
  }
  render() {
    return (
      <StyledApp>
        <Features />
        <Review />
      </StyledApp>
    )
  }
};

export default App;
