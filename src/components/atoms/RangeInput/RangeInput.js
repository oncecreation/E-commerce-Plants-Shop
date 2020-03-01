import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  width: 24rem;
  margin: 2rem 1.5rem;

  @media only screen and (min-width: 500px) {
    width: 28rem;
  }
  @media only screen and (min-width: 700px) {
    width: 24rem;
    margin: 0rem 1.5rem;
  }
  input[type='range'] {
    -webkit-appearance: none;
    background: none;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='range']::-moz-range-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
    cursor: pointer;
  }
  input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
    cursor: pointer;
  }
  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
    cursor: pointer;
  }
  input[type='range']:focus {
    &::-webkit-slider-thumb:after {
      position: absolute;
      cursor: pointer;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${({ theme }) => theme.fontColorPrimary};
      padding: 5px 10px;
      border: 2px solid ${({ theme }) => theme.fontColorPrimary};
    }
    &::-ms-thumb:after {
      cursor: pointer;
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${({ theme }) => theme.fontColorPrimary};
      padding: 5px 10px;
      border: 2px solid ${({ theme }) => theme.fontColorPrimary};
    }
    &::-moz-range-thumb:after {
      cursor: pointer;
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: #000;
      padding: 5px 10px;
      border: 2px solid #000;
    }
  }
`;

const StyledInput = styled.input`
  cursor: pointer;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.regular};
  text-align: start;
`;

const RangeInput = ({ onChange, minPrice, maxPrice, value, name, price }) => {
  return (
    <StyledInputWrapper data-testid="range">
      <StyledLabel htmlFor="range">
        Price range ${minPrice} - ${price}
      </StyledLabel>
      <StyledInput
        data-testid="rangeInput"
        aria-label="price range"
        name={name}
        type="range"
        min={minPrice}
        max={maxPrice}
        value={value}
        id="range"
        onChange={onChange}
      />
    </StyledInputWrapper>
  );
};
RangeInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  price: PropTypes.number,
};

RangeInput.defaultProps = {
  name: 'range',
  onChange: () => {},
  value: 50,
  minPrice: 0,
  maxPrice: 100,
  price: 15,
};
export default RangeInput;
