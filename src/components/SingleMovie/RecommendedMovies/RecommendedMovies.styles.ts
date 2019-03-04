import styled from 'styled-components';

export const RecommendedText = styled.h2`
  border-left: 0.35rem solid ${props => props.theme.colorPrimaryDark};
  padding-left: 1rem;
  margin: 2.5rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

export const RecommendedContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-bottom: 3rem;

  div {
    background-color: ${props => props.theme.colorBlack};
    width: 100%;

    img {
      width: 100%;

      &:hover {
        opacity: 0.1;
      }
    }
  }
`;
