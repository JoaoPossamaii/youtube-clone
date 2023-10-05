import { AnyAction } from "redux";
import { favoritesReducerState } from "../../types";

const INITIAL_STATE_FAV = {
  favoritesMovies: [],
};

const favoriteReducer = (
  state: FavoritesReducerState = INITIAL_STATE_FAV,
  action: AnyAction,
) => state;


export default favoritesReducer; 