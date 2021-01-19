import React, { Component } from 'react';
import styled from "styled-components";
import FeatureItem from "./FeatureItem.jsx";

const StyledFeatures = styled.div`
  color:#3b4144;
  letter-spacing:-0.1px;
  line-height:24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    this.setState({
      topList: this.props.features.slice(0, 6),
      bottomList: this.props.features.slice(6)
    })
  }
  render() {
    const topList = this.props.features.slice(0, 6);
    const bottomList = this.props.features.slice(6);
    return (
      <>
        <StyledFeatures>
          <FeatureItem items={topList} />
          {this.state.clicked === true ? <FeatureItem items={bottomList} /> : null}
        </StyledFeatures>
        <button onClick={this.toggleHandler}>See More</button>
      </>
    )
  }
};

export default Features;