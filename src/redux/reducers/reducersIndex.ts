import { combineReducers } from "redux";
import moviesReducer from "./movies";
import favoritesReducer from "./favoritesMovies";


const rootReducer = combineReducers ({
  movies: moviesReducer,
  favorites: favoritesReducer,  
});

export default rootReducer;