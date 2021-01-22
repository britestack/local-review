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
  fill: rgb(195, 214, 0);
`;

const Yard = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M22.302 18.149l-1.27 2.682H4.748l1.915-6.016h14.788l4.69-9.495h2.574l-6.338 12.829h-.076zm-10.525-6.057l.866-2.723h6.151l1.011 2.723h-8.028zm8.526 14.252a1.713 1.713 0 0 1 0-2.416 1.72 1.72 0 0 1 2.42 0 1.713 1.713 0 0 1 0 2.416 1.72 1.72 0 0 1-2.42 0zm-15.815 0a1.713 1.713 0 0 1 0-2.416 1.72 1.72 0 0 1 2.42 0 1.713 1.713 0 0 1 0 2.416 1.72 1.72 0 0 1-2.42 0z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Yard;