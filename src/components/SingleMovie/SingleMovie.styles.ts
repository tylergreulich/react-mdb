import styled from 'styled-components';

export const SingleMovieContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;
`;

export const SingleMovieImageContainer = styled.figure`
  flex: 0.3;
`;

export const SingleMovieImage = styled.img`
  width: 100%;
`;

export const MovieInfoWrapper = styled.section`
  margin-left: 4rem;
  padding: 2rem 0;
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MovieTitle = styled.h2`
  font-weight: 700;
  margin: 1.5rem 0;
  font-size: 2rem;
`;

export const MovieDetails = styled.p`
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;

  span {
    font-weight: normal;
  }
`;

export const GenreList = styled.p`
  margin-bottom: 0.75rem !important;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Genre = styled.span`
  font-weight: 400;
  &:after {
    content: ', ';
  }

  &:last-of-type:after {
    content: '';
  }
`;

export const CastList = styled.p`
  margin-bottom: 2rem !important;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const CastName = styled.span`
  font-weight: 400;
  &:after {
    content: ', ';
  }

  &:last-of-type:after {
    content: '';
  }
`;

export const MovieOverview = styled(MovieDetails)`
  margin-bottom: 0.75rem;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 150%;
`;
