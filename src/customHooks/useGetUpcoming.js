import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useGetUpcoming = () => {

    const dispatch = useDispatch();

    const getUpcoming = async ()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_OPTIONS);
             const data = await response.json();
            const { results } = data;
             dispatch(addUpcomingMovies(results));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getUpcoming();
    },[])
 
}

export default useGetUpcoming