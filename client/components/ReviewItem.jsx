import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Smily from './Logos/Smily.jsx'

const StyledReview = styled.div`
  .wrapper {
    width: ${props => props.width ? props.width : '170px'};
    height: 280px;
  }
  padding: 28px; // do not touch
  margin: 10px 20px 15px 0px;
  color: white;
  border-radius: 8px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  .topPart {
    &:hover {
      cursor: pointer;
    }
    display: flex;
    flex: 1;
    height: auto;
    img {
      margin-right: 8px;
      width: 36px;
      height: 36px;
      border-radius: 60px;
    }
    .username {
      font-size: 14px;
      font-weight: 800;
    }
    .userInfo {
      font-size: 12px;
      margin-top: 3px;
    }
  }
  .middlePart {
    &:hover {
      cursor: pointer;
    }
    width: 100%;
    height: 185px;
    margin-top: 15px;
    overflow: hidden;
    font-size: 24px;
    padding: 3px;
    flex: 2;
  }
  .bottomPart {
    position: relative;
    height: 50px;
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
      left: 40px;
    }
    .flag {
      position: absolute;
      cursor: pointer;
      bottom: 5px;
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
    const background = this.props.color;
    return (
      <StyledReview color={this.props.color} width={this.props.width} padding={this.props.padding}>
        <div className="wrapper">
          <div className="topPart" onClick={() => this.props.selected(id, background)} >
            <div><img src={this.state.review.thumbnail} alt="" /></div>
            <div>
              <div className="username">{this.state.review.username}</div>
              <div className="userInfo">{this.state.review.resident === true ? 'Resident' : 'Visitor'}{' '}
                • {moment(time).startOf('month').fromNow()}</div>
            </div>
          </div>
          <div className="middlePart " onClick={() => this.props.selected(id, background)} >"{this.state.review.message}"</div>
          <div className="bottomPart">
            <div className="smilyLogo" onClick={this.smilyToggleHandler}><Smily /><span className="liked">{this.state.liked}</span></div>
            <div className="flag" onClick={this.props.flag}>Flag</div>
          </div>
        </div>
      </StyledReview>
    )
  };
}

export default ReviewItem;