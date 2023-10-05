import categoriesData from '../../../data/DataIndex'


function SideBar() {

  const categories = [...categoriesData];

  return (
    <aside className='sidebar'>
      {categories.map((category) => (
        <div className='category-list'>
          <h3>{category.name}</h3>
          <ul>
            {category.movies.map((movie) => (
              <li>
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