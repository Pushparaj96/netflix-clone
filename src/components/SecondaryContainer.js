import MovieCategory from "./MovieCategory";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

  const nowPlaying = useSelector(store=>store?.movies?.nowPlayingMovies);


  return (
    <div className="bg-black text-white">
      { nowPlaying &&
        <div className="pl-14 -mt-72 z-[200] relative">
        <MovieCategory category={"Now Playing"} nowPlayingMovies ={nowPlaying} />
        </div>
      }
    </div>
  )
}

export default SecondaryContainer;