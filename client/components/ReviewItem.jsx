import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Smily from './Logos/Smily.jsx';

const hello = () => {
  const backgroundColors = ['rgb(0, 173, 187)', 'rgb(250, 140, 104)', 'rgb(206, 182, 255)', 'rgb(116, 6, 49)', 'rgb(242, 196, 48)', 'rgb(5, 34, 134)', 'rgb(255, 94, 63)'];
  return background[3];
}

const StyledReview = styled.div`
  /* width: 228px; */
  color: white;
  position: relative;
  min-height: 270px;
  padding: 32px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  overflow: auto;
  background-color: rgb(0, 173, 187);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .topPart {
    display: flex;
    flex: 1;
    width: 162px;
    height: 39px;
    img {
      width: 36px;
      height: 36px;
      border-radius: 1rem;
    }
    li {
      list-style: none;
    }
  }
  .middlePart {
    flex: 2;
  }
  .bottomPart {
    flex: 1;
    position: relative;
    display: flex;
    font-size: 20px;
    .likedNumber {
      position: absolute;
      left: 2.8rem;
    }
    .flag {
      position: absolute;
      right: 0;
    }
  }
  .top-info {
    margin-left: .5rem;
    .username {
      font-size: 16px;
      font-weight: 700;
    }
    .posted {
      font-size: 10px;
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
        <div className="top-info">
          <div className="username">{props.review.username}</div>
          <div>{props.review.resident === true ? 'Resident' : 'Visitor'}
            <span className="posted">●{moment(time).startOf('month').fromNow()}</span></div>
        </div>
      </div>
      <div className="middlePart">
        {props.review.message}
      </div>
      <div className="bottomPart">
        <div><Smily onClick={() => { console.log('smily clicked') }} /><span className="likedNumber">{props.review.liked}</span></div>
        <div className="flag" onClick={() => { console.log('flag clicked') }}>Flag</div>
      </div>
    </StyledReview >
  )
};

export default ReviewItem;