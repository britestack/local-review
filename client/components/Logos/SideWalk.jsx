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

const SideWalkLogo = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M16.795 18.988l2.239 2.422v7.968h-3.99v-6.407l-1.067-1.153-2.958 7.56h-4.32l5.68-14.45-1.217.472-1.858 4.046H5.382l2.83-7.184 6.427-2.485 5.034 1.2v1.576a4.065 4.065 0 0 0 4.065 4.065h1.353v3.99H23.74a8.042 8.042 0 0 1-6.368-3.12l-.576 1.5zm1.76-10.096a3.325 3.325 0 1 1 0-6.65 3.325 3.325 0 0 1 0 6.65z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default SideWalkLogo;
