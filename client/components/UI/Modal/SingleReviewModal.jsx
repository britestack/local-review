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
    .liked {
      font-size: 22px;
      position: absolute;
      top: .2rem;
      left: 3rem;
    }
    .flag {
      font-size: 20px;
    }
  }
`;

const SingleReview = (props) => {
  const time = props.review.posted;
  return (
    <>
      <BackDrop modalClosed={props.close}>
        <StyledReview color={props.review.background}>
          <div className="topPart">
            <div className="userInfo">
              <div className="userInfo-top"><img src={props.review.thumbnail} alt="" /></div>
              <div className="userInfo-mid">
                <div className="username">{props.review.username}</div>
                <div>{props.review.resident === true ? 'Resident' : 'Visitor'}{' '}
              • {moment(time).startOf('month').fromNow()}</div>
              </div>
            </div>
            <div className="closeButton" onClick={props.close}><CloseButton /></div>
          </div>
          <div className="middlePart ">"{props.review.message}"</div>
          <div className="bottomPart">
            <div className="smilyLogo"><Smily /><span className="liked">{props.review.liked}</span></div>
            <div className="flag">Flag</div>
          </div>
        </StyledReview>
      </BackDrop>
    </>
  )
};

export default SingleReview;







// import React from 'react';
// import styled from 'styled-components';
// import Backdrop from '../BackDrop.jsx';

// const StyledModal = styled.div`
//   /* position: fixed; */
//   /* left: 15%;
//   top: 10%; */
//   display: flex;
//   align-items: center;
//   /* z-index: 500; */
//   /* width: 70%; */
//   border: 1px solid #ccc;
//   /* background: black; */
//   background-color: hsla(0, 0%, 0%, 0.5);
//   box-shadow: 1px 1px 1px black;
//   box-sizing: border-box;
//   /* transition: all .3s ease-out;
//   transform: ${props => props.show ? 'translateY(0)' : 'translateY(-160vh)'}; */
//   /* opacity: ${props => props.show ? '1' : '0'}; */
//   opacity: 1;
//   @media(min - width: 600px) {
//     left: calc(50 % - 250px);
//   }
// `;

// const modal = (props) => (
//   <>
//     <Backdrop show={true} clicked={props.modalClosed} />
//     <StyledModal>
//       {props.children}
//     </StyledModal>
//   </>
// );

// export default modal;