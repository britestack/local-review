import React, { Component } from 'react';
import styled from "styled-components";

const StyledFeatures = styled.div`
  color:#3b4144;
  letter-spacing:-0.1px;
  line-height:24px;
`;

const StyledSpan = styled.span`
  color:#869099;
  display:inline;
  letter-spacing:-0.1px;
  line-height:24px;
`;

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topList: [],
      bottomList: [],
      clicked: false
    };
  }
  componentDidMount() {
    this.setState({
      topList: null
    })
  }
  render() {
    return (
      <StyledFeatures>
        <StyledSpan>At Least 130 Trulia users voted on each feature.</StyledSpan>
        {}
      </StyledFeatures>
    )
  }
};

export default Features;