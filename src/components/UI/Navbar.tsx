import React from 'react';
import { StyledNav, StyledNavContainer, StyledNavLink } from './Navbar.styles';

export const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavContainer>
        <li>
          <StyledNavLink to="/">MovieDB</StyledNavLink>
        </li>
      </StyledNavContainer>
    </StyledNav>
  );
};
