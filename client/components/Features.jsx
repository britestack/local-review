import React, { Component } from 'react';
import styled from "styled-components";
import FeatureItem from "./FeatureItem.jsx";

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledButton = styled.div`
  color: rgb(59, 65, 68);
  display: block;
  padding: 0px 0px 4px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  button {
    margin: 0px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 16px;
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    border-color: rgb(205, 209, 212);
  }
`;

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  componentDidMount() {
    const top = this.props.features;
    if (top) {
      this.setState({
        topList: top.slice(0, 6),
        bottomList: top.slice(6)
      })
    }
  }
  render() {
    let topList = [];
    let bottomList = [];
    if (this.props.features) {
      topList = this.props.features.slice(0, 6);
      bottomList = this.props.features.slice(6);
    }
    return (
      <>
        <StyledFeatures>
          <FeatureItem items={topList} />
          {this.state.clicked ? <FeatureItem items={bottomList} /> : null}
        </StyledFeatures>
        <StyledButton><button onClick={this.toggleHandler}>{this.state.clicked ? 'See Less' : 'See All'}</button></StyledButton>
      </>
    )
  }
};

export default Features;