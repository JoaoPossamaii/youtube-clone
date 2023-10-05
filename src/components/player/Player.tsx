import { useSelector } from "react-redux";
import categories from "../../../data/DataIndex";

function Player() {

  const { selectedMovie } = useSelector((reduxState) => reduxState.movies);

  const isFavorite = false;


  return (
    <div className='player'>
      {selectedMovie && (
        <>
          <div className='video-container'>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/O0KVFmrAfB0?si=7M49BmggrASd1gBR" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className='movie-details'>
            <div className='movie-infos'>
              <h2> {selectedMovie.title}</h2>
              <p> Released in {selectedMovie.released}</p>
              {/* <p className='category'> {selectedMovie.title}</p> */}
            </div>
            <div>
              <button
                type='button'
                onClick={() => console.log(selectedMovie)}
              >
                {isFavorite ? ' remove from favorite' : 'add form favorite'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default Player;

