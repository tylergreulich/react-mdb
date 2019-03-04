import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RecommendedMovies } from './RecommendedMovies/RecommendedMovies';
import { singleMovieEffect } from './SingleMovie.effect';
import {
  CastList,
  CastName,
  Genre,
  GenreList,
  MovieDetails,
  MovieInfoWrapper,
  MovieOverview,
  MovieTitle,
  SingleMovieContainer,
  SingleMovieImage,
  SingleMovieImageContainer
} from './SingleMovie.styles';

const SingleMovie: React.FunctionComponent<RouteComponentProps> = ({
  location,
  match
}) => {
  const { id }: any = match.params;
  const { movie, suggestedMovies } = singleMovieEffect(id, location);

  const {
    poster_path,
    release_date,
    vote_average,
    vote_count,
    genres,
    overview,
    title,
    credits
  } = movie;

  return (
    <>
      <SingleMovieContainer>
        <SingleMovieImageContainer>
          <SingleMovieImage
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
          />
        </SingleMovieImageContainer>
        <MovieInfoWrapper>
          <div>
            <MovieTitle>{title}</MovieTitle>
            <MovieDetails>
              Release Date: <span>{release_date}</span>
            </MovieDetails>
            <MovieDetails>
              Rating: <span>{vote_average}</span>
            </MovieDetails>
            <MovieDetails>
              Vote Count: <span>{vote_count}</span>
            </MovieDetails>
            <>
              <GenreList>
                Genres:{' '}
                {genres &&
                  genres.map(({ id, name }) => <Genre key={id}>{name}</Genre>)}
              </GenreList>
            </>
            <>
              <CastList>
                Cast:{' '}
                {credits &&
                  credits.cast
                    .slice(0, 5)
                    .map(({ id, name }) => (
                      <CastName key={id}>{name}</CastName>
                    ))}
              </CastList>
            </>
          </div>
          <div>
            <MovieOverview>{overview}</MovieOverview>
          </div>
        </MovieInfoWrapper>
      </SingleMovieContainer>
      {suggestedMovies && suggestedMovies.results && (
        <RecommendedMovies results={suggestedMovies.results} />
      )}
    </>
  );
};

export default withRouter(SingleMovie);
