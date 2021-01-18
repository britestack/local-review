import React from 'react';
import styled from "styled-components";

const StyledFeatures = styled.div`
  background-color: #f5f6f7;
  color:#3b4144;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.1px;
  line-height: 24px;
`;

const Features = () => (
  <StyledFeatures>
    <div> Featuressss component!</div>
  </StyledFeatures>
);

export default Features;