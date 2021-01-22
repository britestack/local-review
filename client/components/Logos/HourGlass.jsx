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

const HourGlass = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M23.47 26.145h1.961v2.66H6.094v-2.66h1.962v-3.379c0-3.024 1.858-5.616 4.52-6.786-2.662-1.17-4.52-3.763-4.52-6.787v-3.38H6.094v-2.66H25.43v2.66h-1.96v3.38c0 3.024-1.858 5.616-4.52 6.787 2.662 1.17 4.52 3.762 4.52 6.786v3.38zM11.223 11.29c.817 1.592 2.537 2.696 4.539 2.696 2.001 0 3.721-1.104 4.538-2.696h-9.077zm-.76 14.735H21.06l-5.298-5.299-5.299 5.299z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default HourGlass;
