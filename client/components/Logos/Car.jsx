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
  fill: rgb(255, 140, 104);
`;

const Car = () => (
  <StyledWrapper>
    <StyledSvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <StyledSvgPath d="M26.6 22.585v2.02a1.995 1.995 0 1 1-3.99 0v-2.02H9.31v2.02a1.995 1.995 0 1 1-3.99 0V15.96L7.98 5.32h15.96l2.66 10.64v6.625zM23.193 13.3l-1.33-5.32H10.057l-1.33 5.32h14.466zM7.98 16.377v2.66h2.66v-2.66H7.98zm13.3 0v2.66h2.66v-2.66h-2.66z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Car;