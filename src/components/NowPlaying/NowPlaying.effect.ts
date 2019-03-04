import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../config';
import { Movie } from '../../shared/interfaces/Movie.interface';

export const nowPlayingEffect = () => {
  const [nowPlayingResults, setNowPlayingResults] = useState<Movie[]>([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`;
    axios
      .get(url)
      .then(({ data }) => {
        const firstTwenty = data.results.slice(0, 20);
        setNowPlayingResults(firstTwenty);
      })
      .catch(error => console.error(error));
  }, []);

  return { nowPlayingResults };
};
