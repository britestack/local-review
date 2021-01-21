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

const DogLogo = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M12.54 10.774a2.401 2.401 0 0 1-2.407-2.395v-.056a2.401 2.401 0 0 1 2.406-2.395 2.401 2.401 0 0 1 2.407 2.395v.056a2.401 2.401 0 0 1-2.407 2.395zm7.219 0a2.401 2.401 0 0 1-2.407-2.395v-.056a2.401 2.401 0 0 1 2.407-2.395 2.401 2.401 0 0 1 2.406 2.395v.056a2.401 2.401 0 0 1-2.406 2.395zm-.766 3.787l4.372 5.72a3.546 3.546 0 0 1-.68 4.985 3.585 3.585 0 0 1-2.164.726h-8.744a3.565 3.565 0 0 1-3.574-3.557c0-.778.257-1.535.73-2.154l4.372-5.72a3.585 3.585 0 0 1 5.688 0zm5.579-2.645a2.401 2.401 0 0 1 2.406 2.395v.056a2.401 2.401 0 0 1-2.406 2.395 2.4 2.4 0 0 1-2.407-2.395v-.056a2.4 2.4 0 0 1 2.407-2.395zm-14.439 2.451a2.401 2.401 0 0 1-2.407 2.395 2.4 2.4 0 0 1-2.406-2.395v-.056a2.4 2.4 0 0 1 2.406-2.395 2.401 2.401 0 0 1 2.407 2.395v.056z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default DogLogo;