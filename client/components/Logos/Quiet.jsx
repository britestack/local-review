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
  fill: #C3D600;
`;

const Quiet = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M19.878 21.79v.325a5.833 5.833 0 1 1-11.667 0V15.82c0-.112.003-.223.01-.333a7.878 7.878 0 0 1-.01-.384V11.72a7.749 7.749 0 1 1 15.498 0v3.382a7.746 7.746 0 0 1-3.831 6.687zm-2.533-2.627c0-2.472-1.38-4.011-3.782-4.445v-2.913c0-1.053 1.04-1.975 2.397-1.975 1.357 0 2.397.922 2.397 1.975v.23a1.33 1.33 0 0 0 2.66 0v-.23c0-2.598-2.297-4.635-5.057-4.635-2.76 0-5.057 2.037-5.057 4.635v5.423l1.304.026c1.843.036 2.478.58 2.478 1.91 0 1.308-.606 1.807-2.434 1.782a1.33 1.33 0 0 0-.036 2.66c3.215.043 5.13-1.533 5.13-4.443z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Quiet;
