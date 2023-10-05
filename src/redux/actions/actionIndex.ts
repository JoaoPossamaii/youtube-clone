import { Movie } from "../../types";

export const SELECTED_MOVIE = 'SELECTED_MOVIE';
export const UPDATE_FAVORITE_MOVIES = 'UPDATE_FAVORITE_MOVIES';

export const selectMovie = (movie: Movie) => {
   return {
    type:SELECTED_MOVIE,
    payload: movie,
   };
};

export const updatedFavoriteMovie = (movieId: number) => {
   return {
      type:UPDATE_FAVORITE_MOVIES,
      payload:movieId
   };
};