import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const useGetPopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () =>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTIONS);
        const data = await response.json();
        const { results } = data;
        dispatch(addPopularMovies(results));
        }
        catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}

export default useGetPopularMovies;