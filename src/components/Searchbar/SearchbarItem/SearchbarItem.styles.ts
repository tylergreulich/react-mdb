import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchbarLink = styled(Link)`
  color: #fff;
  display: flex;
  padding: 2rem;
  list-style: none;
  text-decoration: none;
  background-color: ${props => props.theme.colorGreyDark};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0a0e0f;
    color: ${props => props.theme.colorPrimary};
  }
`;

export const SearchbarImage = styled.img`
  width: 10rem;
  margin-right: 2rem;
  align-self: center;
`;

export const SearchbarItemDetails = styled.div`
  padding: 2rem 0;

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
