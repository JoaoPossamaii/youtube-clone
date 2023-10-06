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
      if (state.favoritesMovies.includes(action.payload)) {
        return {
          ...state,
          favoriteMovies: state.favoritesMovies.filter((movie) => movie !== action.payload)
        };
      }
      return {
        ...state,
        favoriteMovies: [...state.favoritesMovies, action.payload],
      };
    }
    default: return state;
  }
};


export default favoritesReducer; 