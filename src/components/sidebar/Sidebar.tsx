import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from '../../redux/actions/actionIndex';
// import categoriesData from '../../../data/DataIndex'
import { GlobalReduxState } from '../../types';


function SideBar() {

  const { categories } = useSelector((reduxState: GlobalReduxState) => reduxState.movies);

  const dispatch = useDispatch();

  return (
    <aside className='sidebar'>
      {categories.map((category) => (
        <div className='category-list' key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.movies.map((movie) => (
              <li key={movie.id}>
                <button
                  type='button'
                  onClick={() => dispatch(selectMovie(movie))}
                >
                  {movie.title}
                  {movie.released}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default SideBar;