import axios from 'axios';
import { Location } from 'history';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../config';
import { SingleMovieResult } from '../../interfaces/SingleMovie.interface';

export const singleMovieEffect = (movieId: string, location: Location) => {
  const [movie, setMovie] = useState<SingleMovieResult>({} as any);
  const [suggestedMovies, setSuggestedMovies] = useState<any>([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;

    axios
      .get(url)
      .then(({ data }) => setMovie(data))
      .catch(err => console.log(err));
  }, [location!.pathname]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&page=1`;

    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        setSuggestedMovies(data);
      })
      .catch(err => console.log(err));
  }, [location!.pathname]);

  return { movie, suggestedMovies };
};
