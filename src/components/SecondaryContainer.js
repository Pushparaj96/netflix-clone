import MovieCategory from "./MovieCategory";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store=>store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store=>store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store=>store?.movies?.topratedMovies);
  const upcomingMovies = useSelector(store=>store?.movies?.upcomingMovies);


  return (
    <div className="bg-black text-white">
        <div className="pl-14 -mt-72 z-[200] relative">
        { nowPlayingMovies &&
          <MovieCategory categoryName={"Now Playing"} categoryMovies ={nowPlayingMovies} />
        }
        { topRatedMovies &&
            <MovieCategory categoryName={"Top Rated"} categoryMovies ={topRatedMovies} />
        }
        { upcomingMovies &&
            <MovieCategory categoryName={"Upcoming"} categoryMovies ={upcomingMovies} />
        }
        { popularMovies &&
            <MovieCategory categoryName={"Popular Movies"} categoryMovies ={popularMovies} />
        }
        
        </div>
    </div>
  )
}

export default SecondaryContainer;