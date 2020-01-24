import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CartContext } from '../../../context/CartContext';
import CartIcon from '../../../assets/svg/cart.svg';
import Button from './Button';

const StyledWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  margin: 0 0.8rem;
  position: relative;
`;

const StyledButton = styled(Button)`
  background-image: url(${CartIcon});
  width: 100%;
  height: 100%;
`;

const StyledCounter = styled.span`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  position: absolute;
  font-size: 1rem;
  color: ${({ theme }) => theme.fontColorHeading};
  z-index: 2;
`;

const CartButton = memo(props => {
  const { cartItemsCount } = useContext(CartContext);
  const { onClick } = props;
  return (
    <StyledWrapper>
      <StyledButton aria-label="cart" onClick={onClick}>
        <StyledCounter>{cartItemsCount}</StyledCounter>
      </StyledButton>
    </StyledWrapper>
  );
});
CartButton.propTypes = {
  onClick: PropTypes.func,
};
CartButton.defaultProps = {
  onClick: null,
};
export default CartButton;
