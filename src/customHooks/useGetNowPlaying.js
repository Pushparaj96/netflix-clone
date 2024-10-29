import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useGetNowPlaying = () => {

    const dispatch = useDispatch();

    const fetchMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
        fetchMovies();
    },[])
}

export default useGetNowPlaying