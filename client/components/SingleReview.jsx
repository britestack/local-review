import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Modal from './UI/Modal/Modal.jsx'

const StyledReview = styled.div`
  width: 375px;
  height: 667px;
  padding: 32px;
  background-color:#00adbb;
  border: blue 2px solid;
  /* display: flex;
  flex-direction: column; */
  letter-spacing: -0.1px;
  line-height: 24px;
  .topPart {
    width: 162px;
    height: 39px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 1rem;
    }
    li {
      list-style: none;
    }
  }
  /* .bottomPart {
    border: black solid 2px;
    height: 490px;
    width: 309px;
    color:#ffffff;
    letter-spacing: -0.1px;
    line-height: 24px;
  } */
`;

const SingleReview = (props) => {
  const time = props.review.posted;
  return (
    <StyledReview>
      <div className="review">
        <div className="topPart">
          <img src={props.review.thumbnail} alt="" />
          {props.review.username}
          {props.review.resident === true ? 'Resident' : 'Visitor'}
          {moment(time).startOf('month').fromNow()}
        </div>
        <div className="bottomPart">
          <div>{props.review.message}</div>
        </div>
      </div>
    </StyledReview>
  )
};

export default SingleReview;