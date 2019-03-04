import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Movie } from '../../../shared/interfaces/Movie.interface';
import {
  ImageBackground,
  MovieDetailsContainer,
  MovieImage
} from '../../../shared/styles/Movie.styles';

type NowPlayingMovieProps = Movie & RouteComponentProps<any>;

const NowPlayingMovie: React.FunctionComponent<NowPlayingMovieProps> = ({
  id,
  poster_path,
  history,
  release_date,
  title
}) => (
  <>
    <ImageBackground
      onClick={() =>
        history.push({
          pathname: `/movie/${id}`,
          state: {
            movieId: id
          }
        })
      }
    >
      <MovieImage
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="Movie Poster"
        width="100%"
      />
      <MovieDetailsContainer>
        <p>{title}</p>
        <p>{release_date}</p>
      </MovieDetailsContainer>
    </ImageBackground>
  </>
);

export default React.memo(withRouter(NowPlayingMovie));
