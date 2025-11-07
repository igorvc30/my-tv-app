export type Episode = {
  Duration: number;
  EpisodeNumber: number;
  ID: string;
  Image: string;
  SeasonNumber: number;
  Synopsis: string;
  Title: string;
};

export type Movie = {
  Cast: Array<{
    ID: string;
    Name: string;
  }>;
  Genres: Array<{
    ID: string;
    Title: string;
  }>;
  ID: number;
  Images: {
    Background: string;
  };
  Synopsis: string;
  Title: string;
  Year: number;
};

interface Extra_Movie extends Movie {
  Title: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

type Rating = {
  Source: string;
  Value: string;
};

type Casting = {
  actor: string;
  character: string;
};

export interface Movie_Experimental extends Extra_Movie {
  cast: Array<Casting>;
}
