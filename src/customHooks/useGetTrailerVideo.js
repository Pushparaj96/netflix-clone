import { TMDB_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addBackgroundTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useGetTrailerVideo = (id) => {

    const dispatch = useDispatch();

    const getTrailer = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, TMDB_OPTIONS);
        const data = await response.json();
        const allVideos = data?.results;
        const filteredTrailers = allVideos.filter(item=>item.type === "Trailer");
        const backgroundTrailer = (filteredTrailers.length)?filteredTrailers[0]:allVideos[0];
        dispatch(addBackgroundTrailer(backgroundTrailer));
    }

    useEffect(()=>{
        getTrailer();
    },[])
}

export default useGetTrailerVideo;