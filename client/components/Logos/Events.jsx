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
  fill: rgb(206, 182, 255);
`;

const Events = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M18.934 22.735l-.343-1.761a9.366 9.366 0 0 1-5.836-.09l-.286 1.851h6.465zm-6.876 2.66l-.554 3.593h-2.47l1.489-9.227a9.367 9.367 0 0 1-3.986-6.404H4.395v-2.66h22.831v2.66h-2.142a9.369 9.369 0 0 1-4.015 6.424l.712 3.654a2.96 2.96 0 1 1-3.088 1.96h-6.635zm2.326-22.678h2.66v6.544h-2.66V2.717zm-5.32 2.66h2.66v3.884h-2.66V5.377zm10.64 0h2.66v3.884h-2.66V5.377z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Events;
