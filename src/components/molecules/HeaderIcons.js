import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import CartButton from '../atoms/Button/CartButton';
import Cart from './Cart';
import LogoutIcon from '../../assets/svg/logout.svg';
import { fire } from '../../firebase/Firebase';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const StyledLogoutButton = styled(Button)`
  background-image: url(${LogoutIcon});
  width: 2.2rem;
  height: 2.2rem;
`;

const HeaderIcons = () => {
  const [CartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => setCartOpen(prevState => !prevState);
  const handlelogout = () => fire.auth().signOut();
  return (
    <StyledWrapper>
      <CartButton onClick={handleCartOpen} />
      <Cart isVisible={CartOpen} />
      <StyledLogoutButton onClick={handlelogout} />
    </StyledWrapper>
  );
};

export default HeaderIcons;
