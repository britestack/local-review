import React from 'react';
import styled from 'styled-components';
import Backdrop from '../BackDrop.jsx';

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  /* width: 70%; */
  border: 1px solid #ccc;
  background: black;
  box-shadow: 1px 1px 1px black;
  left: 15%;
  top: 10%;
  box-sizing: border-box;
  /* transition: all .3s ease-out; */
   @media (min-width: 600px) {
   left: calc(50% - 250px);
  }
`;

const modal = (props) => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <StyledModal style={{ transform: props.show ? 'translateY(0)' : 'translateY(-300vh)', opacity: props.show ? '1' : '0' }}>
      {props.children}
    </StyledModal>
  </>
);

export default modal;