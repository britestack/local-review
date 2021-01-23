import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import BackDrop from '../BackDrop.jsx'
import Smily from '../../Logos/Smily.jsx'
import CloseButton from '../../Logos/CloseButton.jsx'

const StyledReview = styled.div`
    border-radius: 8px;
    padding: 32px;
    width: 100%;
    height: 667px;
    color: rgb(255, 255, 255);
    background-color: ${props => props.color};
    max-width: 375px;
    max-height: 667px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  .topPart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .userInfo {
      display: flex;
    }
    .userInfo-mid {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .username {
      font-size: 24px;
      font-weight: 800;
    }
    }
    img {
      width: 45px;
      height: 45px;
      border-radius: 1.5rem;
    }
  }
  .middlePart {
    overflow: auto;
    flex: 1 1 auto;
    margin: 24px 0px;
    padding: 32px;
    font-size: 28px;
  }
  .bottomPart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .smilyLogo:hover {
      cursor: pointer;
    }
    .liked {
      font-size: 22px;
      position: absolute;
      top: .2rem;
      left: 3rem;
    }
    .flag {
      &:hover {
        cursor: pointer;
      }
      font-size: 20px;
    }
  }
`;

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.review.liked,
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
    return (
      <BackDrop modalClosed={this.props.close}>
        <StyledReview color={this.props.review.background}>
          <div className="topPart">
            <div className="userInfo">
              <div className="userInfo-top"><img src={this.props.review.thumbnail} alt="" /></div>
              <div className="userInfo-mid">
                <div className="username">{this.props.review.username}</div>
                <div>{this.props.review.resident === true ? 'Resident' : 'Visitor'}{' '}
              • {moment(time).startOf('month').fromNow()}</div>
              </div>
            </div>
            <div className="closeButton" onClick={this.props.close}><CloseButton /></div>
          </div>
          <div className="middlePart ">"{this.props.review.message}"</div>
          <div className="bottomPart">
            <div className="smilyLogo" onClick={this.smilyToggleHandler}><Smily /><span className="liked">{this.state.liked}</span></div>
            <div className="flag" onClick={this.props.showflag}>Flag</div>
          </div>
        </StyledReview>
      </BackDrop>
    )
  }
};

export default SingleReview;