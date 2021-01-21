import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Smily from './Logos/Smily.jsx'

const StyledReview = styled.div`
  /* width: 228px; */
  height: 270px;
  padding: 32px;
  border: 1px solid rgb(232, 233, 234);
  border-radius: 8px;
  background-color:#00adbb;
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
        <div>
          <div className="username">{props.review.username}</div>
          {props.review.resident === true ? 'Resident' : 'Visitor'}
          <div className="date">{moment(time).startOf('month').fromNow()}</div>
        </div>
      </div>
      <div className="middlePart">
        <p>{props.review.message}</p>
      </div>
      <div className="bottomPart">
        <Smily />
        <div>Flag</div>
      </div>
    </StyledReview >
  )
};

export default ReviewItem;