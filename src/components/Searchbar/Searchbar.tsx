import React, { lazy, Suspense } from 'react';
import { Movie } from '../../shared/interfaces/Movie.interface';
import { Spinner } from '../UI/Spinner';
import { searchbarEffect } from './Searchbar.effects';
import {
  SearchIcon,
  SearchList,
  StyledForm,
  StyledInput
} from './Searchbar.styles';

const SearchbarItem = lazy(() => import('./SearchbarItem/SearchbarItem'));

const Searchbar = () => {
  const {
    handleChange,
    results,
    setResults,
    setChanged,
    searchParam,
    setSearchParam
  } = searchbarEffect();

  return (
    <StyledForm>
      <SearchIcon className="fas fa-search" />
      <StyledInput
        type="text"
        onChange={handleChange}
        placeholder="Search for a movie"
        value={searchParam}
      />
      {results && results.length >= 1 && (
        <SearchList>
          <li
            onClick={() => {
              setChanged(true);
              setSearchParam('');
              setResults([]);
            }}
          >
            {results.map(({ id, title, release_date, poster_path }: Movie) => (
              <Suspense fallback={<Spinner />} key={id}>
                <SearchbarItem
                  id={id}
                  title={title}
                  release_date={release_date}
                  poster_path={poster_path}
                />
              </Suspense>
            ))}
          </li>
        </SearchList>
      )}
    </StyledForm>
  );
};

export default Searchbar;
