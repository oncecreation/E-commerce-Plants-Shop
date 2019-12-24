import React from 'react';
import styled from 'styled-components';
import PlantIcon from '../../assets/svg/plantTree.svg';
import StyledHeading from '../atoms/Heading/Heading';

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 3rem;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1000px) {
    padding: 0 5rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 7rem;
  }
  @media only screen and (min-width: 1400px) {
    padding: 0 12rem;
  }
`;
const StyledWrapperHeading = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  @media only screen and (min-width: 700px) {
    margin-bottom: 13%;
  }
  @media only screen and (min-width: 700px) {
    align-items: flex-start;
  }
`;
const StyledWrapperImage = styled.figure`
  width: 25rem;
  height: 27rem;
  margin-top: 2rem;
  @media only screen and (min-width: 700px) {
    width: 30rem;
    height: 34rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const Hero = () => (
  <StyledWrapper>
    <StyledWrapperHeading>
      <StyledHeading main>Say hello to </StyledHeading>
      <StyledHeading main>home plants!</StyledHeading>
    </StyledWrapperHeading>
    <StyledWrapperImage>
      <img src={PlantIcon} alt="Plant" />
    </StyledWrapperImage>
  </StyledWrapper>
);
export default Hero;
