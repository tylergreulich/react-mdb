import styled from 'styled-components';

export const NowPlayingResultsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-bottom: 4rem;
`;

export const NowPlayingText = styled.h2`
  margin: 4rem 0;
  font-size: 2rem;
  font-weight: 500;
  border-left: 0.35rem solid ${props => props.theme.colorPrimaryDark};
  padding-left: 1rem;
`;
