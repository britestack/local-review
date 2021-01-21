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
  fill: #CEB6FF;
`;

const Holiday = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M16.628 13.673a5.996 5.996 0 0 1 1.393 3.852 5.997 5.997 0 0 1-1.428 3.893c-1.944-.008-7.652-.008-9.193-.008a5.997 5.997 0 0 1-1.42-3.885 6 6 0 0 1 1.392-3.852A4.91 4.91 0 0 1 7.08 12c0-1.503.675-2.85 1.737-3.752a3.733 3.733 0 1 1 6.365 0A4.909 4.909 0 0 1 16.92 12a4.91 4.91 0 0 1-.292 1.673zM12 11.075a1.083 1.083 0 1 0 0-2.165 1.083 1.083 0 0 0 0 2.165zm0 3.27a1.083 1.083 0 1 0 0-2.166 1.083 1.083 0 0 0 0 2.166zm0 3.269a1.083 1.083 0 1 0 0-2.165 1.083 1.083 0 0 0 0 2.165z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Holiday;