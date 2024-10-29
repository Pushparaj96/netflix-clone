import Header from './Header';
import { TMDB_OPTIONS } from "../utils/constants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const Browse = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS);
        const data = await response.json();
        console.log(data.results);
         dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    return (
        <div>
            <Header/>
             Browse
        </div>
    )
}

export default Browse;