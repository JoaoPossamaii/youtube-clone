import { useSelector } from 'react-redux';
import categoriesData from '../../../data/DataIndex'


function SideBar() {

  const {categories} = useSelector((reduxState) => reduxState.movies);

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
                  onClick={() => console.log(movie, category)}
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