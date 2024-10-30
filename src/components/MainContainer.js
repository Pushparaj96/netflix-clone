import BackgroundTrailer from "./BackgroundTrailer";
import TrailerMovieInfo from "./TrailerMovieInfo";
import { useSelector } from "react-redux";


const MainContainer = () => {

    const moviesList = useSelector(store=>store?.movies?.nowPlayingMovies); 

    if(!moviesList) return;

    const trailerMovie = moviesList[0];
    const { id,title,overview } = trailerMovie;

  return (
    <div >
        <TrailerMovieInfo title={title} overview={overview} />
        <BackgroundTrailer id={id} />
        
    </div>
  )
}

export default MainContainer;