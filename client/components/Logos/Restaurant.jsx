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
  fill: rgb(59, 65, 68);
`;

const Restaurant = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M22.96 4.965c1.27 0 1.397.382 1.397 1.279V26.6h-2.329v-7.78l-2.19-.034a1.315 1.315 0 0 1-1.213-1.553l1.712-11.25.011-.049c.3-1.245.998-.97 2.612-.97zm-6.346-.197c.643 0 1.164.522 1.164 1.166v4.832c0 2.093-1.712 3.818-3.894 4.012V26.6h-2.328V14.783c-2.228-.15-3.993-1.892-3.993-4.017V6.012a1.165 1.165 0 1 1 2.329 0v4.754c0 .847.722 1.549 1.664 1.678v-6.51a1.165 1.165 0 1 1 2.328 0v6.495c.893-.162 1.566-.846 1.566-1.663V5.934c0-.644.521-1.166 1.164-1.166z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Restaurant;
