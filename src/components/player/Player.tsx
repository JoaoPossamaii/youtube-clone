import { useDispatch, useSelector } from "react-redux";
// import categories from "../../../data/DataIndex";
import { GlobalReduxState } from "../../types";
import { updatedFavoriteMovie } from "../../redux/actions/actionIndex";

function Player() {

  const { selectedMovie } = useSelector((reduxState: GlobalReduxState) => reduxState.movies);
  const favorites = useSelector((reduxState: GlobalReduxState) => reduxState.favorites);

  const dispatch = useDispatch();
  const isFavorite = favorites.favoritesMovies.includes(selectedMovie.id);


  return (
    <div className='player'>
      {selectedMovie && (
        <>
          <div className='video-container'>
            <iframe width="560" height="315"
              src={`https://www.youtube.com/embed/${selectedMovie.embedID}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className='movie-details'>
            <div className='movie-infos'>
              <h2> {selectedMovie.title}</h2>
              <p> Released in {selectedMovie.released}</p>
            </div>
            <div>
              <button
                type='button'
                onClick={() => dispatch(updatedFavoriteMovie(selectedMovie.id))}
              >
                {isFavorite ? ' X remove from favorite' : 'O add form favorite'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default Player;

