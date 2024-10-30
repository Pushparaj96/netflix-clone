import useGetNowPlaying from '../customHooks/useGetNowPlaying';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

    useGetNowPlaying();

    return (
        <div >
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;