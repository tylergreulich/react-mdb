import styled from 'styled-components';

export const ImageBackground = styled.div`
  background-color: ${props => props.theme.colorBlack};
  height: 100%;
  position: relative;
  cursor: pointer;

  &:hover > img {
    opacity: 0.1;
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const MovieImage = styled.img`
  height: 100%;
  transition: all 0.2s ease-in-out;
  backface-visibility: hidden;
`;

export const MovieDetailsContainer = styled.div`
  opacity: 0;
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  padding: 9rem 0;

  p {
    text-align: center;
    color: ${props => props.theme.colorPrimary};
    font-size: 1.5rem;
  }
`;
