import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
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
  width: 960px;
  height: 419px;
  color:#3b4144;
  letter-spacing: -0.1px;
  line-height: 24px;
  .container {
    overflow: hidden;
  }
  .nav {
    color: rgb(59, 65, 68);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
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
        -webkit-box-shadow: none;
        color: rgb(0, 120, 130);
        background-color: rgb(255, 255, 255);
        border-color: solid 2px rgb(232, 233, 234);
      };
      background-color: transparent;
      border-color: transparent;
      /* margin-bottom: 16px; */
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
      font-size: 16px;
      line-height: 1.5;
      padding: 8px 16px;
    }
  }
  .slider {
    /* margin-top: 16px; */
    position: relative;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    /* transition: transform 0.45s ease 0s; */
  }
  .responsiveWrapper {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -16px;
    flex-wrap: nowrap;
    transition: all .4s ease 0s;
    transform: ${props => props.slide ? 'translateX(-60.5rem)' : '0'}
  }
  .items{
    cursor: pointer;
    border-style: solid;
    border-color: transparent;
    border-width: 16px 8px 0px;
    /* display: block; */
    @media (min-width: 376px){
      width: 96%;
    }
    @media (min-width: 570px){
      width: 48%;
    }
  }
`;

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
  onClickHandler(id) {
    axios.get(`reviews/${id}`)
      .then(result => {
        this.setState({
          selectedReview: result.data,
          showingSingle: true
        })
        console.log('review clicked, id: ', id);
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
              <div><button onClick={() => this.buttonClickHandler('all')}>All</button></div>
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
                    <div key={i} className="items">
                      <ReviewItem flag={this.showFlag} review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show community reviews  */}
                {this.state.view === 'community' ? community.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.showFlag} review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show dog owners reviews  */}
                {this.state.view === 'dogOwners' ? dogOwners.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.showFlag} review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show parents reviews  */}
                {this.state.view === 'parents' ? parents.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.showFlag} review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show commute reviews  */}
                {this.state.view === 'commute' ? commute.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.showFlag} review={review} selected={this.onClickHandler} />
                    </div>
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