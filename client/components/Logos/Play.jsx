import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  /* display: inline-block; */
  font-size: 0px;
`;

const StyledSvg = styled.svg`
  height: 30px;
  width: 30px;
`;

const StyledSvgPath = styled.path`
  fill: #00A3B1;
`;

const Play = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M24.297 15.306h-2.672l2.672-3.901v3.901zm-4.5 5.356v-2.686l.25-.367h4.25v3.053h-4.5zm5.652-15.417c-.636 0-1.152.516-1.152 1.152V9h-4.5V6.33a1.152 1.152 0 0 0-2.304 0v2.717h-.051L5.32 26.744h8.47l3.703-5.405v5.331h2.303v-3.704h4.501v3.704H26.6V6.397c0-.636-.516-1.152-1.151-1.152z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Play;
