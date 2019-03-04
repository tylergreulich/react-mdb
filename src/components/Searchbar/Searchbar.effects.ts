import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from './../../config';

export const searchbarEffect = () => {
  const [searchParam, setSearchParam] = useState<string>('');
  const [results, setResults] = useState<any>([]);
  const [changed, setChanged] = useState<boolean>(false);

  const handleChange = ({
    currentTarget
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(currentTarget.value);
  };

  useEffect(() => {
    if (searchParam === '' || searchParam.length === 1) {
      setResults([]);
    }
  }, [searchParam]);

  useEffect(() => {
    if (searchParam !== '' && searchParam.length > 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchParam}`
        )
        .then(({ data }) => {
          setResults(data.results);
        })
        .catch(err => console.log(err));
    } else {
      setResults([]);
    }
  }, [searchParam]);

  return {
    handleChange,
    results,
    setResults,
    changed,
    setChanged,
    searchParam,
    setSearchParam
  };
};
