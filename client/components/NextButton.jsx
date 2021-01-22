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
  right: -.8rem;
  top: calc(50% - 24px);
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2sease 0s, background-color 0.2s ease 0s;
  border-radius: 24px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
  .dynamicDisplay {
    font-size: 10px;
    position: absolute;
    top: .5rem;
    right: .6rem;
    font-size: 16px;
    font-weight: bold;
  }
`;

const StyledSvg = styled.svg`
  height: 26px;
  width: 26px;
`;

const StyledSvgPath = styled.path`
  fill: rgb(59, 65, 68);
`;

const NextButton = (props) => (
  <StyledButton onClick={props.click}>
    {props.slide ? <div className="dynamicDisplay">+{props.all.length}
    </div> : <StyledSvg>
        <StyledSvgPath d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" />
      </StyledSvg>}
  </StyledButton>
)

export default NextButton;