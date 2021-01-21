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

const Neighbors = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M16.039 26.589c-1.372 0-2.683-.26-3.887-.733-2.22.757-4.111 1.407-5.674 1.949.139-.998.411-2.93.818-5.795a10.585 10.585 0 0 1-1.891-6.056c0-5.873 4.76-10.634 10.634-10.634 5.873 0 10.634 4.761 10.634 10.634S21.913 26.59 16.04 26.59zm0-5.274a5.241 5.241 0 0 0 5.241-5.241c-3.244-.093-7.643 0-10.482 0a5.241 5.241 0 0 0 5.241 5.24zm-2.833-9.888a1.445 1.445 0 1 0 0 2.89 1.445 1.445 0 0 0 0-2.89zm5.666 0a1.445 1.445 0 1 0 0 2.89 1.445 1.445 0 0 0 0-2.89z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Neighbors;
