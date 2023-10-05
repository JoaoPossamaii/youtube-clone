import categories from '../../../data/DataIndex';
import { MoviesReducerState } from '../../types';


const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
  categories: [...categories], 
};

const moviesReducer = (state: MoviesReducerState = INITIAL_STATE, action:AnyAction) => state;

export default moviesReducer;