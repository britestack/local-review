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
  fill: rgb(255, 140, 104);
`;

const Parking = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M15.96 26.6c-5.876 0-10.64-4.764-10.64-10.64S10.084 5.32 15.96 5.32 26.6 10.084 26.6 15.96 21.836 26.6 15.96 26.6zm-.742-13.795h2.176c.653 0 1.205.575 1.205 1.31 0 .736-.552 1.311-1.205 1.311h-2.176v-2.62zm0 5.281h2.176c2.147 0 3.865-1.79 3.865-3.97 0-2.181-1.718-3.97-3.865-3.97h-4.836v11.387h2.66v-3.447z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Parking;