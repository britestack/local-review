import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Smily from './Logos/Smily.jsx'

const StyledReview = styled.div`
  width: ${props => props.width ? props.width : '10.2rem'};
  height: 19rem;
  color: white;
  padding: 28px 32px 10px 32px;
  /* padding: 32px; */
  border-radius: 8px;
  background-color: ${props => props.color};
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
    background-image: linear-gradient(rgba(0, 173, 187, .6));
    overflow: hidden;
    font-size: 24px;
    padding: 5px;
    flex: 2;
  }
  .bottomPart {
    color: white;
    overflow: hidden;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;
    .smilyLogo:hover {
      cursor: pointer;
    }
    .liked {
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 2.6rem;
    }
    .flag {
      position: absolute;
      cursor: pointer;
      top: 2.3rem;
      right: 0;
      font-size: 16px;
    }
  }
`;

class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.review.liked,
      review: this.props.review,
      smilyClicked: false
    }
    this.smilyToggleHandler = this.smilyToggleHandler.bind(this);
  }
  smilyToggleHandler() {
    let liked = this.state.liked;
    if (!this.state.smilyClicked) {
      liked++;
      this.setState({
        liked,
        smilyClicked: true
      })
    } else {
      liked--;
      this.setState({
        liked,
        smilyClicked: false
      })
    }
  }
  render() {
    const time = this.props.review.posted;
    const id = this.props.review._id;
    return (
      <StyledReview color={this.state.review.background} width={this.props.width} >
        <div className="topPart" onClick={() => this.props.selected(id)} >
          <div><img src={this.state.review.thumbnail} alt="" /></div>
          <div>
            <div className="username">{this.state.review.username}</div>
            <div className="userInfo">{this.state.review.resident === true ? 'Resident' : 'Visitor'}{' '}
                • {moment(time).startOf('month').fromNow()}</div>
          </div>
        </div>
        <div className="middlePart " onClick={() => this.props.selected(id)} >"{this.state.review.message}"</div>
        <div className="bottomPart">
          <div className="smilyLogo" onClick={this.smilyToggleHandler}><Smily /><span className="liked">{this.state.liked}</span></div>
          <div className="flag" onClick={this.props.flag}>Flag</div>
        </div>
      </StyledReview>
    )
  };
}

export default ReviewItem;