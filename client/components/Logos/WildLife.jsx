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

const WildLife = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M23.669 13.507v5.84c0 2.535-1.314 4.765-3.316 6.11v-1.914a4.448 4.448 0 0 0-8.897 0v1.906c-1.995-1.345-3.304-3.572-3.304-6.102v-5.84H6.606a1.33 1.33 0 0 1 0-2.66h5.41V9.5H5.354V3.99h2.66v2.85h1.24V4.843h2.66V6.84h2.762v4.007h2.613V6.84h2.795V4.843h2.66V6.84h1.24V3.99h2.66V9.5h-6.695v1.347h5.265a1.33 1.33 0 0 1 0 2.66H23.67zM14.595 24.86a1.33 1.33 0 0 1 .18-2.647h2.259a1.33 1.33 0 0 1 .204 2.644c.006.05.009.102.009.155v1.27a1.33 1.33 0 0 1-2.66 0v-1.27c0-.051.003-.102.008-.152zm-2.68-6.717a1.33 1.33 0 1 0 0-2.66 1.33 1.33 0 0 0 0 2.66zm8.034 0a1.33 1.33 0 1 0 0-2.66 1.33 1.33 0 0 0 0 2.66z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default WildLife;