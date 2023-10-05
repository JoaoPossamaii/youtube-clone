import categories from '../../../data/DataIndex';
import { AnyAction } from 'redux';
import { MoviesReducerState } from '../../types';
import { SELECTED_MOVIE } from '../actions/actionIndex';


const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
  categories: [...categories],
};

const moviesReducer = (state: MoviesReducerState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload
      }
    }
    default: return state;
  }
};

export default moviesReducer;