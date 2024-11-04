import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { addNowPlayingMovies , addPopularMovies , addTopratedMovies , addUpcomingMovies } from '../utils/moviesSlice';
import useGetMoviesByCategory from '../customHooks/useGetMoviesByCategory';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';


const Browse = () => {

    const showGptSearch = useSelector(store=>store?.gpt?.showGptSearch);
    const { nowPlayingMovies , popularMovies , topratedMovies , upcomingMovies} = useSelector(store=>store?.movies)

    //useGetMoviesByCategory(api,dispatchAction) ==> custom Hook

    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",addNowPlayingMovies,nowPlayingMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",addPopularMovies,popularMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",addTopratedMovies,topratedMovies);
    useGetMoviesByCategory("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",addUpcomingMovies,upcomingMovies);


    return (
        <div >
            <Header/>
            {
                showGptSearch ? <GptSearchPage/> : (
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