export type Movie = {
  id: number;
  embedID: string;
  title:string;
  released:number;
};

export type Category = {
  id: number;
  name:string;
  movies:Movie[];
};

export type MoviesReducerState = {
  selectedMovie:Movie;
  categories:Category[];
};

export type FavoritesReducerState = {
  // guardar os ids dos filmes favoritos
  favoritesMovies: number[]
};

export type GlobalReduxState = {
  movies:MoviesReducerState,
  favorites:FavoritesReducerState,
}