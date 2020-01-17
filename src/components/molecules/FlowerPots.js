import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { CartContext } from '../../context/CartContext';
import Text from '../atoms/Text/Text';
import greyPot from '../../assets/svg/greyPot.svg';
import bluePot from '../../assets/svg/bluePot.svg';
import yellowPot from '../../assets/svg/yellowPot.svg';
import redPot from '../../assets/svg/redPot.svg';

const StyledWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  @media only screen and (min-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledPot = styled.figure`
  cursor: pointer;
  width: 7rem;
  height: 7rem;

  ${({ active }) =>
    active &&
    css`
      border: solid 4px #f3f6f8;
    `}
`;

const StyledText = styled(Text)`
  font-size: 2.4rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  outline: dashed 4px #f3f6f8;
  :focus {
    outline: solid 4px #f3f6f8;
  }
`;

const FlowerPots = () => {
  const { changeColor } = useContext(CartContext);
  const handleOnKeyPress = e => {
    if (e.keyCode === 0) {
      changeColor(e);
    }
  };

  return (
    <>
      <StyledText main>Flowerpot preview</StyledText>
      <StyledWrapper>
        <StyledPot onClick={changeColor}>
          <StyledImage
            src={greyPot}
            alt="grey pot"
            data-hex1="#485550"
            data-hex2="#4F7262"
            data-hex3="#4B6358"
            tabIndex="0"
            onKeyPress={handleOnKeyPress}
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <StyledImage
            src={redPot}
            alt="red pot"
            data-hex1="#9E3901"
            data-hex2="#CB4F09"
            data-hex3="#BC4502"
            onKeyPress={handleOnKeyPress}
            tabIndex="0"
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <StyledImage
            src={yellowPot}
            alt="yellow pot"
            data-hex1="#8D9901"
            data-hex2="#CCDE00"
            data-hex3="#B5C500"
            onKeyPress={handleOnKeyPress}
            tabIndex="0"
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <StyledImage
            src={bluePot}
            alt="blue pot"
            data-hex1="#006D85"
            data-hex2="#0092B3"
            data-hex3="#00809C"
            onKeyPress={handleOnKeyPress}
            tabIndex="0"
          />
        </StyledPot>
      </StyledWrapper>
    </>
  );
};

export default FlowerPots;
