import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledReview = styled.div`
  width: 228px;
  height: 345px;
  padding: 32px;
  background-color:#00adbb;
  border: blue 2px solid;
  display: flex;
  flex-direction: column;
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
`;

const ReviewItem = (props) => {
  const time = props.review.posted;
  const id = props.review._id;
  return (
    <StyledReview onClick={() => props.selected(id)}>
      <div className="topPart">
        <img src={props.review.thumbnail} alt="" />
        {props.review.username}
        {props.review.resident === true ? 'Resident' : 'Visitor'}
        {moment(time).startOf('month').fromNow()}
      </div>
      <div className="bottomPart">
        <p>{props.review.message}</p>
      </div>
    </StyledReview >
  )
};

export default ReviewItem;