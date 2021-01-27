import React from 'react';
import styled from 'styled-components';

const StyledBackDrop = styled.div`
  /* display: inline; */
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0,.7);
  backdrop-filter: blur(1rem);
`;

const Backdrop = (props) => (
  <StyledBackDrop onClick={props.clicked} />
);


const StyledModal = styled.div`
  position: fixed;
  z-index: 2;
  left: 15%;
  top: 10%;
  box-sizing: border-box;
   @media (min-width: 600px) {
   left: calc(50% - 250px);
  }
`;

const Modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} />
    <StyledModal>
      {props.children}
    </StyledModal>
  </>
);

export default Modal;
