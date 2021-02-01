import React from "react";
import styled from 'styled-components';

import Like from './Logos/Like.jsx';
import Dog from './Logos/Dog.jsx';
import SideWalkLogo from './Logos/SideWalk.jsx';
import Play from './Logos/Play.jsx';
import Cart from './Logos/Cart.jsx';
import Moon from './Logos/Moon.jsx';
import Restaurant from './Logos/Restaurant.jsx';
import StreetLight from './Logos/StreetLight.jsx';
import Holiday from './Logos/Holiday.jsx';
import Neighbors from './Logos/Neighbors.jsx';
import Quiet from './Logos/Quiet.jsx';
import HourGlass from './Logos/HourGlass.jsx';
import Parking from './Logos/Parking.jsx';
import Car from './Logos/Car.jsx';
import WildLife from './Logos/WildLife.jsx';
import Yard from './Logos/Yard.jsx';
import Events from './Logos/Events.jsx';

const StyledItem = styled.div`
  position: relative;
  height: 48px;
  width: 296px;
  display: flex;
  align-items: center;
  padding-right: 24px;
  color: rgb(59, 65, 68);
  .percentWrapper {
    position: relative;
    min-width: 96px;
    height: 32px;
    display: block;
    border-radius: 8px;
    background-color: rgb(224, 247, 248);
    margin: 5px;
    padding: 5px;

  }
  .percentage {
    position: absolute;
    top: 10px;
    right: 14px;
    color: rgb(0, 120, 130);
    font-size: 20px;
    font-weight: bold;
  }
  .descriptionWrapper {
    display: flex;
    align-items: center;
  }
  .logo {
    position: absolute;
    top: .5rem;
    left: 37%;
  }
  .description {
    padding-left: 2.5rem;
    color: rgb(59, 65, 68);
    font-size: 15px;
  }
`;

const FeatureItem = (props) => {
  const calculatePercent = (num) => {
    const total = 130;
    return Math.floor((num * 100) / total);
  }
  const logos = (itemsLength, index) => {
    if (itemsLength === 6) {
      if (index === 0) return <Dog />;
      if (index === 1) return <SideWalkLogo />;
      if (index === 2) return <Restaurant />;
      if (index === 3) return <Cart />;
      if (index === 4) return <Moon />;
      if (index === 5) return <StreetLight />;
    } else {
      if (index === 0) return <Play />;
      if (index === 1) return <Holiday />;
      if (index === 2) return <Neighbors />;
      if (index === 3) return <Quiet />;
      if (index === 4) return <HourGlass />;
      if (index === 5) return <Parking />;
      if (index === 6) return <Car />;
      if (index === 7) return <WildLife />;
      if (index === 8) return <Yard />;
      if (index === 9) return <Events />;
    }
  };
  const description = (itemsLength, index) => {
    if (itemsLength === 6) {
      if (index === 0) return 'It\'s dog friendly';
      if (index === 1) return 'There are sidewalks';
      if (index === 2) return 'It\'s walkable to restaurants';
      if (index === 3) return 'It\'s walkable to grocery stores';
      if (index === 4) return 'People would walk alone at night';
      if (index === 5) return 'Streets are well-lit';
    } else {
      if (index === 0) return 'Kids play outside';
      if (index === 1) return 'There\'s holiday spirit';
      if (index === 2) return 'Neighbors are friendly';
      if (index === 3) return 'It\'s quiet';
      if (index === 4) return 'They plan to stay for at least 5 years';
      if (index === 5) return 'Parking is easy';
      if (index === 6) return 'Car is needed';
      if (index === 7) return 'There\'s wildlife';
      if (index === 8) return 'Yards are well-kept';
      if (index === 9) return 'There are community events';
    }
  };
  return (
    <>
      {
        props.items ?
          props.items.map((item, i) => {
            return (
              <StyledItem key={i}>
                <div className="percentWrapper"><Like /><span className="percentage">{calculatePercent(item.liked)}%</span></div>
                <div className="descriptionWrapper">
                  <span className="logo">{logos(props.items.length, i)}</span>
                  <div className="description">{description(props.items.length, i)}</div>
                </div>
              </StyledItem>
            )
          }) : null
      }
    </>
  );
}

export default FeatureItem;