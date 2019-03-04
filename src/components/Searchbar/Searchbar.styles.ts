import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 2rem;
`;

export const SearchIcon = styled.i`
  position: absolute;
  font-size: 1.5rem;
  color: ${props => props.theme.colorGrey};
  margin: 2rem 0 0 1.2rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 2rem 0 2rem 4rem;
  border: 0.1rem solid ${props => props.theme.colorGrey};
  color: ${props => props.theme.colorBlack};
  outline: none;
  transition: border 0.35s ease-out;

  &:focus {
    border: 0.1rem solid ${props => props.theme.colorPrimaryDark};
  }

  &:focus + &[placeholder] {
    color: ${props => props.theme.colorPrimary};
  }
`;

export const SearchList = styled.ul`
  width: 70vw;
  height: 50rem;
  z-index: 99999;
  overflow-y: visible;
  position: absolute;

  li {
    list-style: none;
  }
`;
