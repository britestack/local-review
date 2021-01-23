import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewItem from '../../../components/ReviewItem.jsx';
import ModalClose from '../../Logos/ModalClose.jsx'

const StyledReviews = styled.div`
    border-radius: 8px;
    padding: 32px;
    width: 1184px;
    height: 624px;
    overflow: scroll;
    background-color: rgb(255, 255, 255);
    .responsiveWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .items {
      margin: .5rem;
    }
    .nav {
      position: relative;
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
        background-color: #DDDADA;
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
    .closeButton {
      border-radius: 1rem;
      position: absolute;
      right: 0px;
      top: 5px;
      &:hover {
        background: #DDDADA;
        cursor: pointer;
      }
    }
  }
`;

const StyledBackDrop = styled.div`
  display: inline;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .9);
`;

const Backdrop = (props) => (
  <StyledBackDrop onClick={props.clicked} />
);


const StyledModal = styled.div`
  position: fixed;
  z-index: 200;
  top: 8%;
  left: 11%;
  box-sizing: border-box;
   /* @media (min-width: 600px) {
   left: calc(25%% - 250px);
  } */
`;

const Modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} />
    <StyledModal>
      {props.children}
    </StyledModal>
  </>
);

class AllReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all',
      showingFlag: false
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
      <Modal modalClosed={this.props.close}>
        <StyledReviews>
          <div className="container">
            <div className="nav">
              <div><button onClick={() => this.buttonClickHandler('all')}>All</button></div>
              <div><button onClick={() => this.buttonClickHandler('community')}>Community</button></div>
              <div><button onClick={() => this.buttonClickHandler('dog owners')}>Dog Owners</button></div>
              <div><button onClick={() => this.buttonClickHandler('parents')}>Parents</button></div>
              <div><button onClick={() => this.buttonClickHandler('commute')}>Commute</button></div>
              <div className="closeButton" onClick={() => this.props.close()} ><ModalClose /></div>
            </div>
            <div className="itemsWrapper">
              <div className="responsiveWrapper">
                {/* show all reviews  */}
                {this.state.view === 'all' ? reviews.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.props.close} width="13.3rem" review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show community reviews  */}
                {this.state.view === 'community' ? community.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.props.close} width="13.3rem" review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show dog owners reviews  */}
                {this.state.view === 'dog owners' ? dogOwners.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.props.close} width="13.3rem" review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show parents reviews  */}
                {this.state.view === 'parents' ? parents.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.props.close} width="13.3rem" review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
                {/* show commute reviews  */}
                {this.state.view === 'commute' ? commute.map((review, i) => {
                  return (
                    <div key={i} className="items">
                      <ReviewItem flag={this.props.close} width="13.3rem" review={review} selected={this.onClickHandler} />
                    </div>
                  )
                }) : null}
              </div>
            </div>
          </div>
        </StyledReviews>
      </Modal >
    )
  }

};

export default AllReviewModal;

