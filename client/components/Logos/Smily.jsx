import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-block;
  font-size: 0px;
`;

const StyledSvg = styled.svg`
  height: 29px;
  width: 29px;
`;

const StyledSvgPath = styled.path`
  fill: white;
`;

const Smily = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M15.96 29.26c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6zM12.048 9.602a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm7.824 0a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm-11.23 7.174a1.33 1.33 0 0 1 2.66 0 4.658 4.658 0 1 0 9.316 0 1.33 1.33 0 0 1 2.66 0 7.318 7.318 0 0 1-14.636 0z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Smily;
