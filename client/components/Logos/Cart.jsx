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
  fill: #FA8C68;
`;

const Cart = () => (
  <StyledWrapper>
    <StyledSvg>
      <StyledSvgPath d="M26.358 9.986l-2.234 6.017H6.292L4.378 9.986h19.407l1.562-4.197h2.574l-1.563 4.197zM7.111 18.577H23.17L22.158 21.3H7.978l-.867-2.723zm12.404 8.21a1.713 1.713 0 0 1 0-2.415 1.72 1.72 0 0 1 2.42 0 1.713 1.713 0 0 1 0 2.415 1.72 1.72 0 0 1-2.42 0zm-10.69.025a1.713 1.713 0 0 1 0-2.415 1.72 1.72 0 0 1 2.42 0 1.713 1.713 0 0 1 0 2.415 1.72 1.72 0 0 1-2.42 0z" fill-rule="evenodd" />
    </StyledSvg>
  </StyledWrapper>
)

export default Cart;

