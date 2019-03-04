interface Genre {
  id: number;
  name: string;
}

interface Company {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface Country {
  id: number;
  name: string;
}

interface Language {
  iso_639_1: string;
  name: string;
}

interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

interface Crew {
  credit_id: number;
  department: string;
  gender: number;
  id: number;
  job: number;
  name: string;
  profile_path: string;
}

export interface SingleMovieResult {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  credits: {
    cast: Cast[];
    crew: Crew[];
  };
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  rating: number;
  release_date: string;
  revenue: number;
  runtime: number;
  results?: any;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
