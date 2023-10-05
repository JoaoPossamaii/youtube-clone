import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, legacy_createStore as createStore } from "redux";
import categories from '../../data/DataIndex';


const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
};

const moviesReducer = (state = INITIAL_STATE, action) => state;

const INITIAL_STATE_FAV = {
  favoriteMovies: [1],
};

const favoriteReducer = (state = INITIAL_STATE_FAV, action) => state;

const rootReducer = combineReducers ({
  movies: moviesReducer,
  favorites: favoriteReducer,
});


const store = createStore(rootReducer, composeWithDevTools());


export default store;