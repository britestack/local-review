import React from 'react';
import styled from 'styled-components';
import CloseButton from '../../Logos/CloseButton.jsx'

const StyledReview = styled.div`
    font-size: 16.5px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    padding: 32px;
    width: 610px;
    height: 100%;
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-bottom: 10px;
    }
    a {
      color: rgb(0, 120, 130);
      text-decoration: none;
    }
    ul {
      list-style: none;
      li {
        display: flex;
        margin-bottom: .8rem;
        input {
          width: 20px;
        }
        span {
          margin-left: 5px;
        }
      }
    }
    button {
      outline: 0;
      margin: 10px .5rem;
      border-radius: 8px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
      padding: 8px 16px;
      width: 18vh;
    }
    .report {
        border-color: rgb(0, 120, 130);
        background-color: rgb(0, 120, 130);
        color: white;
        &:hover {
          background-color: white;
          color: rgb(0, 120, 130);
        }
      }
    .cancel {
        background-color: white;
        &:hover {
          background-color: #DDDADA;
        }
      }
`;

const StyledBackDrop = styled.div`
  display: inline;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 6;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .7);
  backdrop-filter: blur(1rem);
`;

const Backdrop = (props) => (
  <StyledBackDrop onClick={props.clicked} />
);

const StyledModal = styled.div`
  position: fixed;
  z-index: 7;
  top: 12%;
  left: 30%;
  box-sizing: border-box;
   /* @media (min-width: 600px) {
   left: calc(25%% - 250px);
  } */
`;

const Modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} />
    <StyledModal>
      {props.children}
    </StyledModal>
  </>
);

const FlagModal = (props) => {
  return (
    <Modal modalClosed={props.close}>
      <StyledReview>
        <div className="heading">
          <h1>Report this content</h1><div className="closeButton" onClick={() => props.close()}><CloseButton /></div>
        </div>
        <div>
          <div>Please refer to Trulia's <a href="#">Community Guidelines</a> and let us know why you think the content you're reporting may violate these guidelines</div>
          <h3>What's wrong with this content?</h3>
          <ul>
            <li><label><input type="radio" name="reasons" value="inappropriate offensive or unneighborly" /><span>Inapproriate, offensive or unneighborly</span></label></li>
            <li><label><input type="radio" name="reasons" value="not relevant" /><span>Not relevant, talks about the wrong neighborhood or a specific property</span></label></li>
            <li><label><input type="radio" name="reasons" value="commercial promotional or spam" /><span>Commercial, promotional or spam</span></label>
            </li>
            <li><label><input type="radio" name="reasons" value="duplicate content" /><span>Duplicate content</span></label></li>
          </ul>
          <div className="buttons" onClick={props.close}>
            <button className="report">Report</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </StyledReview>
    </Modal>
  )
};

export default FlagModal;


