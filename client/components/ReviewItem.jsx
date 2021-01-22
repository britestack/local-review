import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Smily from './Logos/Smily.jsx'

const StyledReview = styled.div`
  width: 10.2rem;
  height: 19rem;
  padding: 28px 32px 10px 32px;
  /* padding: 32px; */
  border-radius: 8px;
  background-color:#00adbb;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.1px;
  line-height: 24px;
  .topPart {
    display: flex;
    flex: 1;
    width: 11rem;
    height: 1.5rem;
    img {
      margin-right: .2rem;
      width: 38px;
      height: 38px;
      border-radius: 1rem;
    }
    .username {
      font-size: 16px;
      font-weight: 900;
    }
    .userInfo {
      font-size: 12px;
    }
  }
  .middlePart {
    padding: 24px 0px;
    flex: 2;
  }
  .bottomPart {
    color: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;
    .liked {
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 2.6rem;
    }
    .flag {
      position: absolute;
      top: 2.3rem;
      right: 0;
      font-size: 16px;
    }
  }
`;

const ReviewItem = (props) => {
  const time = props.review.posted;
  const id = props.review._id;
  return (
    <StyledReview onClick={() => props.selected(id)}>
      <div className="topPart">
        <div><img src={props.review.thumbnail} alt="" /></div>
        <div>
          <div className="username">{props.review.username}</div>
          <div className="userInfo">{props.review.resident === true ? 'Resident' : 'Visitor'}{' '}
                • {moment(time).startOf('month').fromNow()}</div>
        </div>
      </div>
      <div className="middlePart ">{props.review.message}</div>
      <div className="bottomPart">
        <div className="smilyLogo"><Smily /><span className="liked">{props.review.liked}</span></div>
        <div className="flag">Flag</div>
      </div>
    </StyledReview>
  )
};

export default ReviewItem;