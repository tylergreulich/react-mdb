import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const StyledNavContainer = styled.ul`
  display: flex;

  li {
    list-style: none;
  }
`;

export const StyledNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.colorPrimaryDark};
  }
`;
