import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import BackDrop from '../BackDrop.jsx'
import Smily from '../../Logos/Smily.jsx'

const StyledReview = styled.div`
    border: 1px solid rgb(250, 140, 104);
    border-radius: 8px;
    padding: 32px;
    width: 100%;
    height: 667px;
    color: rgb(255, 255, 255);
    background-color: rgb(250, 140, 104);
    max-width: 375px;
    max-height: 667px;
  .topPart {
    /* width: 162px;
    height: 39px; */
    img {
      width: 32px;
      height: 32px;
      border-radius: 1rem;
    }
  }
  .bottomPart {

  }
`;

const SingleReview = (props) => {
  const time = props.review.posted;
  return (
    <>
      <BackDrop modalClosed={props.close}>
        <StyledReview>
          <div className="topPart">
            <img src={props.review.thumbnail} alt="" />
            {props.review.username}
            {props.review.resident === true ? 'Resident' : 'Visitor'}
            {moment(time).startOf('month').fromNow()}
          </div>
          <div className="middlePart ">{props.review.message}</div>
          <div className="bottomPart">
            <div className="smilyLogo"><Smily /></div>
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