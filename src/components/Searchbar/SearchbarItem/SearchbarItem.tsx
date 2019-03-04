import React from 'react';
import { searchbarEffect } from '../Searchbar.effects';
import {
  SearchbarImage,
  SearchbarItemDetails,
  SearchbarLink
} from './SearchbarItem.styles';

interface SearchbarItemProps {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}

const SearchbarItem: React.FunctionComponent<SearchbarItemProps> = ({
  id,
  title,
  release_date,
  poster_path
}) => {
  const { setSearchParam } = searchbarEffect();

  return (
    <SearchbarLink to={`/movie/${id}`} onClick={() => setSearchParam('')}>
      <SearchbarImage
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={`Image of ${title}`}
      />
      <SearchbarItemDetails>
        <p
          style={{
            marginBottom: '1rem'
          }}
        >
          {title}
        </p>
        <p>{release_date}</p>
      </SearchbarItemDetails>
    </SearchbarLink>
  );
};

export default SearchbarItem;
