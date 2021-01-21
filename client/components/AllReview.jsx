import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewItem from './ReviewItem.jsx';

const StyledReviews = styled.div`
  /* width: 375px;
  height: 667px;
  padding: 32px;
  background-color:#00adbb;
  border: blue 2px solid;
  /* display: flex;
  flex-direction: column; */
  /* letter-spacing: -0.1px;
  line-height: 24px; */ */
  .list {
    display: grid;
    grid-template-columns: 1fr, 1fr, 1fr, 1fr;
  }
`;

class AllReviewBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all'
    }
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }
  buttonClickHandler(type) {
    this.setState({
      view: type
    })
  }
  render() {
    const { reviews } = this.props;
    const community = reviews.filter(review => (
      review.type === 'community'
    ));
    const dogOwners = reviews.filter(review => (
      review.type === 'dog owners'
    ));
    const parents = reviews.filter(review => (
      review.type === 'parents'
    ));
    const commute = reviews.filter(review => (
      review.type === 'commute'
    ));
    return (
      <StyledReviews>
        <div className="review">
          <div className="buttons">
            <button onClick={() => this.buttonClickHandler('all')}>All</button>
            <button onClick={() => this.buttonClickHandler('community')}>Community</button>
            <button onClick={() => this.buttonClickHandler('dog owners')}>Dog Owners</button>
            <button onClick={() => this.buttonClickHandler('parents')}>Parents</button>
            <button onClick={() => this.buttonClickHandler('commute')}>Commute</button>
          </div>
          <div className="list">
            {/* show all reviews  */}
            {this.state.view === 'all' ? reviews.map((review, i) => {
              return (
                <ReviewItem review={review} selected={this.onClickHandler} />
              )
            }) : null}
            {/* show community reviews  */}
            {this.state.view === 'community' ? community.map((review, i) => {
              return (
                <div key={i} className="items">
                  <ReviewItem review={review} selected={this.onClickHandler} />
                </div>
              )
            }) : null}
            {/* show dog owners reviews  */}
            {this.state.view === 'dog owners' ? dogOwners.map((review, i) => {
              return (
                <div key={i} className="items">
                  <ReviewItem review={review} selected={this.onClickHandler} />
                </div>
              )
            }) : null}
            {/* show parents reviews  */}
            {this.state.view === 'parents' ? parents.map((review, i) => {
              return (
                <div key={i} className="items">
                  <ReviewItem review={review} selected={this.onClickHandler} />
                </div>
              )
            }) : null}
            {/* show commute reviews  */}
            {this.state.view === 'commute' ? commute.map((review, i) => {
              return (
                <div key={i} className="items">
                  <ReviewItem review={review} selected={this.onClickHandler} />
                </div>
              )
            }) : null}
          </div>
        </div>
      </StyledReviews>
    )
  }
};

export default AllReviewBackdrop;