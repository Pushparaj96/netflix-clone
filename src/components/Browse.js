import useGetNowPlaying from '../customHooks/useGetNowPlaying';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../customHooks/useGetPopularMovies';
import useGetToprated from '../customHooks/useGetToprated';
import useGetUpcoming from '../customHooks/useGetUpcoming';


const Browse = () => {

    useGetNowPlaying();
    useGetPopularMovies();
    useGetToprated();
    useGetUpcoming();


    return (
        <div >
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;