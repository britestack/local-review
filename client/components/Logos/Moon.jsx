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

const Moon = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M14.915 5.32A8.439 8.439 0 0 0 26.6 17.005c-.524 5.416-5.089 9.65-10.643 9.65-5.905 0-10.692-4.787-10.692-10.692 0-5.554 4.234-10.12 9.65-10.643z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Moon;
