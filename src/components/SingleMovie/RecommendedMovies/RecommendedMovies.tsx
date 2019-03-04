import React from 'react';
import { Movie } from '../../../shared/interfaces/Movie.interface';
import {
  RecommendedContainer,
  RecommendedText
} from './RecommendedMovies.styles';

const RecommendedMovie = React.lazy(() =>
  import('./RecommendedMovie/RecommendedMovie')
);

interface RecommendedMoviesProps {
  results: Movie[];
}

export const RecommendedMovies: React.FunctionComponent<
  RecommendedMoviesProps
> = ({ results }) => (
  <>
    <RecommendedText>
      {results.length < 1 ? 'No Recommendations Found' : 'Recommendations'}
    </RecommendedText>
    <RecommendedContainer>
      {results &&
        results
          .slice(10)
          .map(
            ({ id: suggestedId, poster_path, title, release_date }: Movie) => (
              <RecommendedMovie
                suggestedId={suggestedId}
                posterPath={poster_path}
                title={title}
                key={suggestedId}
                releaseDate={release_date}
              />
            )
          )}
    </RecommendedContainer>
  </>
);
