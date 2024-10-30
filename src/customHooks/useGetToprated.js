import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";


const useGetToprated = () => {

    const dispatch = useDispatch();
    
    const getToprated = async () => {
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TMDB_OPTIONS);
        const data = await response.json();
        const { results } = data;
        dispatch(addTopratedMovies(results));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getToprated();
    },[])
}

export default useGetToprated;