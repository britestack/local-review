import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  background: white;
  border-radius: 2rem;
  font-size: 0px;
`;

const StyledSvg = styled.svg`
  height: 30px;
  width: 30px;
`;

const StyledSvgPath = styled.path`
  fill: #869099;
`;

const CloseButton = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default CloseButton;
