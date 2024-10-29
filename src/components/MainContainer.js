import BackgroundTrailer from "./BackgroundTrailer";
import TrailerMovieInfo from "./TrailerMovieInfo";
import { useSelector } from "react-redux";


const MainContainer = () => {

    const moviesList = useSelector(store=>store?.movies?.nowPlayingMovies); 

    if(!moviesList) return;

    const trailerMovie = moviesList[0];
    const { id,title,overview } = trailerMovie;

  return (
    <div>
        <BackgroundTrailer id={id} />
        <TrailerMovieInfo title={title} overview={overview} />
    </div>
  )
}

export default MainContainer;