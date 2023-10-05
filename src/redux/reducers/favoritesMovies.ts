import { AnyAction } from "redux";
import { FavoritesReducerState, } from "../../types";
import { UPDATE_FAVORITE_MOVIES } from "../actions/actionIndex";

const INITIAL_STATE_FAV = {
  favoritesMovies: [],
};

const favoritesReducer = (
  state: FavoritesReducerState = INITIAL_STATE_FAV,
  action: AnyAction,
) => {
  switch (action.type) {
    case UPDATE_FAVORITE_MOVIES: {
      if (state.favoriteMovies.includes(action.payload.movieId))
        return {
          ...state,
          favoriteMovies: state.favoriteMovies.filter((movie) => movie !== action.payload.movieId)

        }
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload.movieId]
      }
    }
    default: return state;
  }
};


export default favoritesReducer; 