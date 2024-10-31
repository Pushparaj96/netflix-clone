import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

const useGetMoviesByCategory  = (api,dispatchAction) => {

    const dispatch = useDispatch();

    const fetchData = async()=>{
        try{
        const response = await fetch(api,TMDB_OPTIONS);
        const data = await response.json();
        const { results } = data;
        dispatch(dispatchAction(results));
        }
        catch(error){
            console.log(error);
            
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

}

export default useGetMoviesByCategory;