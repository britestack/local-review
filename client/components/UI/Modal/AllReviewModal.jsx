import React from 'react';
import styled from 'styled-components';
import ReviewItem from '../../../components/ReviewItem.jsx';
import ModalClose from '../../Logos/ModalClose.jsx'

const StyledReviews = styled.div`
    border-radius: 8px;
    padding: 22px;
    height: 624px;
    overflow: scroll;
    @media(max-width: 1000px) {
      width: 700px;
    }
    @media(max-width: 800px) {
      width: 500px;
    }
    background-color: rgb(255, 255, 255);
    .responsiveWrapper {
      font-size: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      @media(max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
      }
      @media(max-width: 800px) {
        grid-template-columns: 1fr;
      }
    }
    .nav {
      position: relative;
      color: rgb(59, 65, 68);
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
        color: rgb(0, 120, 130);
        border: solid 1px #DDDADA;
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
      font-size: 20px;
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
  z-index: 6;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .7);
  backdrop-filter: blur(1rem);
`;

const Backdrop = (props) => (
  <StyledBackDrop onClick={props.clicked} />
);

const StyledModal = styled.div`
  position: fixed;
  z-index: 7;
  width: 70%;
  top: 5%;
  left: 15%;
  box-sizing: border-box;
`;

const Modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} />
    <StyledModal>
      {props.children}
    </StyledModal>
  </>
);

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
      review.type === 'dogOwners'
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
              <div><button autoFocus="true" onClick={() => this.buttonClickHandler('all')}>All</button></div>
              <div><button onClick={() => this.buttonClickHandler('community')}>Community</button></div>
              <div><button onClick={() => this.buttonClickHandler('dogOwners')}>Dog Owners</button></div>
              <div><button onClick={() => this.buttonClickHandler('parents')}>Parents</button></div>
              <div><button onClick={() => this.buttonClickHandler('commute')}>Commute</button></div>
              <div className="closeButton" onClick={() => this.props.close()} ><ModalClose /></div>
            </div>
            <div className="responsiveWrapper">
              {/* show all reviews  */}
              {this.state.view === 'all' ? reviews.map((review, i) => {
                return (
                  <ReviewItem flag={this.props.showflag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                )
              }) : null}
              {/* show community reviews  */}
              {this.state.view === 'community' ? community.map((review, i) => {
                return (
                  <ReviewItem flag={this.props.showflag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                )
              }) : null}
              {/* show dog owners reviews  */}
              {this.state.view === 'dogOwners' ? dogOwners.map((review, i) => {
                return (
                  <ReviewItem flag={this.props.showflag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                )
              }) : null}
              {/* show parents reviews  */}
              {this.state.view === 'parents' ? parents.map((review, i) => {
                return (
                  <ReviewItem flag={this.props.showflag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                )
              }) : null}
              {/* show commute reviews  */}
              {this.state.view === 'commute' ? commute.map((review, i) => {
                return (
                  <ReviewItem flag={this.props.showflag} key={i} review={review} selected={this.onClickHandler} color={colors[i]} />
                )
              }) : null}
            </div>
          </div>
        </StyledReviews>
      </Modal >
    )
  }

};

export default AllReviewModal;

