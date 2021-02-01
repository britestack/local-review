import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(255, 255, 255);
  };
  &:active {
    background-color: rgb(150, 150, 150);
    border: 1px solid rgb(150, 150, 150);
  };
  position: absolute;
  left: -.8rem;
  top: calc(50% - 24px);
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
  border-radius: 24px;
  padding: 1px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: flex;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
`;

const StyledSvg = styled.svg`
  height: 26px;
  width: 26px;
`;

const StyledSvgPath = styled.path`
  fill: rgb(59, 65, 68);
`;

const PrevButton = (props) => (
  <StyledButton onClick={props.click}>
    <StyledSvg>
      <StyledSvgPath d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" />
    </StyledSvg>
  </StyledButton>
)

export default PrevButton;