import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-block;
  font-size: 0px;
`;

const StyledSvg = styled.svg`
  height: 30px;
  width: 30px;
`;

const StyledSvgPath = styled.path`
  fill: rgb(59, 65, 68);
`;

const LikeLogo = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M9.016 11.858c3.183-.709 5.217-3.378 6.127-8.36l.245-1.349h1.37c3.81 0 6.705 3.46 6.128 7.273l-.367 2.435h3.166c2.933 0 5.04 2.83 4.284 5.653l-2.139 8.577c-.725 2.705-3.315 4.451-6.078 4.06L10.834 28.46v1.698H1.801v-18.3h7.215zm1.818 2.898v10.38l11.399 1.761c1.086.154 2.126-.547 2.417-1.632l2.139-8.577c.21-.787-.355-1.546-1.104-1.546H18.7l.285-1.888.653-4.322c.208-1.377-.506-2.645-1.62-3.2-1.198 4.73-3.597 7.805-7.184 9.024zm-3.285.387H5.086v11.73h2.463v-11.73z" />
    </StyledSvg>
  </StyledWrapper>
)

export default LikeLogo;