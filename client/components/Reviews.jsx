import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReviewItem from './ReviewItem.jsx';

const slide = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(30%);
  }
`;

const StyledButtton = styled.button`
  animation: 1s ${slide} ease-out;
`;

const StyledReviews = styled.div`
  position: relative;
  display: flex;
  width: 960px;
  height: 419px;
  color:#3b4144;
  letter-spacing: -0.1px;
  line-height: 24px;
  border: 2px green solid;
  .review {
    overflow: hidden;
  }
  .slider {
    display: flex;
  }
  .items{
    width: 244px;
    height: 361px;
    justify-content: center;
    border: orange 2px solid;
  }
  .floatingButton {
    position: absolute;
    display: inline;
    height: 32px;
    width: 32px;
    border-radius: 1rem;
    bottom: 12rem;
    right: -1px;
    background-color: salmon;
  }
`;

const Reviews = (props) => {
  return (
    <StyledReviews>
      <div className="review">
        <div className="buttons">
          <button>All</button>
          <button>Community</button>
          <button>Dog Owners</button>
          <button>Parents</button>
          <button>Commute</button>
        </div>
        <div className="slider">
          {props.reviews.map((review, i) => {
            return (
              <div key={i} className="items">
                <ReviewItem review={review} />
              </div>
            )
          })}
        </div>
      </div>
      <button className="floatingButton">></button>
    </StyledReviews>
  )
};

export default Reviews;