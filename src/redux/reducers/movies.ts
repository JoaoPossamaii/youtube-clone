import categories from '../../../data/DataIndex';


const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
  categories: [...categories], 
};

const moviesReducer = (state = INITIAL_STATE, action) => state;

export default moviesReducer;