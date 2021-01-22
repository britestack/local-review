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
  fill: rgb(0, 163, 177);
`;

const StreetLight = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M15.978 5.594A5.357 5.357 0 0 1 25.275 8.4a3.106 3.106 0 0 1 1.77 2.805H20.83c0-1.223.707-2.28 1.734-2.787a2.697 2.697 0 0 0-5.246.272c.013.156.02.312.02.471v8.979h1.918l1.662 9.975h-9.975l1.663-9.975h2.011V9.16c0-.159.007-.315.02-.47a2.696 2.696 0 0 0-5.25-.26 3.105 3.105 0 0 1 1.707 2.774H4.879c0-1.25.74-2.328 1.804-2.82a5.357 5.357 0 0 1 9.295-2.79zm7.96 10.128a3.106 3.106 0 0 1-3.108-3.106h6.215a3.107 3.107 0 0 1-3.107 3.106zm-15.951 0a3.107 3.107 0 0 1-3.108-3.106h6.215a3.106 3.106 0 0 1-3.107 3.106z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default StreetLight;
