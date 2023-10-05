import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { legacy_createStore as createStore } from "redux";
import categories from '../../data/DataIndex';


const INITIAL_STATE = {
  selectedMovie: categories[0].movies[0],
};

const reducer = (state = INITIAL_STATE, action) => state;
const store = createStore(reducer, composeWithDevTools());

export default store;