import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewItem from './ReviewItem.jsx';
import SingleReview from './UI/Modal/SingleReviewModal.jsx';
import AllReviewModal from './UI/Modal/AllReviewModal.jsx';
import FlagModal from './UI/Modal/FlagModal.jsx';
import NextButton from './NextButton.jsx';
import PrevButton from './PrevButton.jsx';

const StyledReviews = styled.div`
  position: relative;
  display: flex;
  width: 970px;
  height: 400px;
  color:#3b4144;
  .container {
    overflow: hidden;
  }
  .nav {
    color: rgb(59, 65, 68);
    font-size: 16px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-bottom: 5px;
    @media (min-width: 570px) {
      margin-left: -2px;
    }
    @media (min-width: 376px) {
      margin-left: 2px;
    }
    button {
      &:hover {
        background-color: #DDDADA;
      };
      &:focus{
        outline: 0;
        color: rgb(0, 120, 130);
        background-color: rgb(255, 255, 255);
        border-color: solid 2px rgb(232, 233, 234);
      };
      background-color: transparent;
      border-color: transparent;
      border-radius: 8px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
      display: inline-block;
      color: rgb(59, 65, 68);
      text-align: center;
      font-weight: bold;
      transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
      white-space: nowrap;
      font-size: 19px;
      padding: 8px 12px;
    }
  }
  .slider {
    position: relative;
    font-size: 16px;
  }
  .responsiveWrapper {
    display: flex;
    transition: all .4s ease 0s;
    transform: ${props => props.slide ? 'translateX(-980px)' : '0'}
  }
`;

const colors = {
  0: '#00adbb',
  1: '#fa9668',
  2: '#ceb6ff',
  3: '#740631',
  4: '#f2c430',
  5: '#052286',
  6: '#ff5e3f',
  7: '#00adbb',
  8: '#00adbb',
  9: '#fa9668',
  10: '#ceb6ff',
  11: '#740631',
  12: '#f2c430',
  13: '#052286',
  14: '#ff5e3f',
  15: '#00adbb',
  16: '#00adbb',
  17: '#fa9668',
  18: '#ceb6ff',
  19: '#740631',
  20: '#f2c430',
  21: '#052286'
}

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all',
      selectedReview: '',
      showingSingle: false,
      showingAll: false,
      showingFlag: false,
      slide: false
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.allModalCloser = this.allModalCloser.bind(this);
    this.showFlag = this.showFlag.bind(this);
  }
  buttonClickHandler(type) {
    this.setState({
      view: type
    })
  }
  allModalCloser() {
    this.setState({
      showingSingle: false,
      showingFlag: false,
      showingAll: false
    })
  }
  onClickHandler(id, backgroundColor) {
    axios.get(`reviews/${id}`)
      .then(result => {
        const selectedReview = Object.assign({}, result.data);
        selectedReview.background = backgroundColor;
        this.setState({
          selectedReview,
          showingSingle: true
        })
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }
  showFlag() {
    this.setState({
      showingSingle: false,
      showingAll: false,
      showingFlag: true
    })
  }
  render() {
    const all = this.props.reviews;
    const community = this.props.reviews.filter(review => (
      review.type === 'community'
    ));
    const dogOwners = this.props.reviews.filter(review => (
      review.type === 'dogOwners'
    ));
    const parents = this.props.reviews.filter(review => (
      review.type === 'parents'
    ));
    const commute = this.props.reviews.filter(review => (
      review.type === 'commute'
    ));
    return (
      <>
        {/* Modals live here  */}
        {this.state.showingSingle ? <SingleReview showflag={this.showFlag} close={this.allModalCloser} review={this.state.selectedReview} /> : null}
        {this.state.showingAll ? <AllReviewModal showflag={this.showFlag} close={this.allModalCloser} reviews={all} /> : null}
        {this.state.showingFlag ? <FlagModal close={this.allModalCloser} /> : null}
        <StyledReviews slide={this.state.slide}>
          <div className="container">
            <div className="nav">
              <div><button autofocus="true" onClick={() => this.buttonClickHandler('all')}>All</button></div>
              <div><button onClick={() => this.buttonClickHandler('community')}>Community</button></div>
              <div><button onClick={() => this.buttonClickHandler('dogOwners')}>Dog Owners</button></div>
              <div><button onClick={() => this.buttonClickHandler('parents')}>Parents</button></div>
              <div><button onClick={() => this.buttonClickHandler('commute')}>Commute</button></div>
            </div>
            <div className="slider" slide={this.state.slideRight}>
              <div className="responsiveWrapper">
                {/* show all reviews  */}
                {this.state.view === 'all' ? all.map((review, i) => {
                  return (
                    <ReviewItem flag={this.showFlag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                  )
                }) : null}
                {/* show community reviews  */}
                {this.state.view === 'community' ? community.map((review, i) => {
                  return (
                    <ReviewItem flag={this.showFlag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                  )
                }) : null}
                {/* show dog owners reviews  */}
                {this.state.view === 'dogOwners' ? dogOwners.map((review, i) => {
                  return (
                    <ReviewItem flag={this.showFlag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                  )
                }) : null}
                {/* show parents reviews  */}
                {this.state.view === 'parents' ? parents.map((review, i) => {
                  return (
                    <ReviewItem flag={this.showFlag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                  )
                }) : null}
                {/* show commute reviews  */}
                {this.state.view === 'commute' ? commute.map((review, i) => {
                  return (
                    <ReviewItem flag={this.showFlag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                  )
                }) : null}
              </div>
            </div>
          </div>
          {/* Buttons live here  */}
          <NextButton slide={this.state.slide} all={all} click={() => {
            if (this.state.slide) {
              this.setState({
                showingAll: true
              })
            } else {
              this.setState({
                slide: true
              })
            }
          }} />
          {this.state.slide ? <PrevButton click={() => {
            this.setState({
              slide: false
            })
          }} /> : null}
        </StyledReviews >
      </>
    )
  }
};

export default Reviews;