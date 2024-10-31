import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { addNowPlayingMovies , addPopularMovies , addTopratedMovies , addUpcomingMovies } from '../utils/moviesSlice';
import useGetMoviesByCategory from '../customHooks/useGetMoviesByCategory';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {

    const showGptSearch = useSelector(store=>store?.gpt?.showGptSearch);

    //useGetMoviesByCategory(api,dispatchAction) ==> custom Hook

    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",addNowPlayingMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",addPopularMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",addTopratedMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",addUpcomingMovies);


    return (
        <div >
            <Header/>
            {
                showGptSearch ? <GptSearch/> : (
                    <>
                    <MainContainer/>
                    <SecondaryContainer/>
                    </>
                )
            }         
        </div>
    )
}

export default Browse;