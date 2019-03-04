import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  ImageBackground,
  MovieDetailsContainer,
  MovieImage
} from '../../../../shared/styles/Movie.styles';

interface RecommendedMovieProps {
  suggestedId: string;
  posterPath: string;
  releaseDate: string;
  title: string;
}

const RecommendedMovie: React.FunctionComponent<
  RecommendedMovieProps & RouteComponentProps<any>
> = ({ suggestedId, posterPath, releaseDate, title, history }) => (
  <ImageBackground
    onClick={() =>
      history.push({
        pathname: `/movie/${suggestedId}`,
        state: {
          movieId: suggestedId
        }
      })
    }
  >
    <MovieImage
      src={`https://image.tmdb.org/t/p/original${posterPath}`}
      alt="Movie Poster"
      width="100%"
    />
    <MovieDetailsContainer>
      <p>{title}</p>
      <p>{releaseDate}</p>
    </MovieDetailsContainer>
  </ImageBackground>
);

export default withRouter(RecommendedMovie);
