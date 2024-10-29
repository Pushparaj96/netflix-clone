import useGetNowPlaying from '../customHooks/useGetNowPlaying';
import Header from './Header';

const Browse = () => {

    useGetNowPlaying();

    return (
        <div>
            <Header/>
             Browse
        </div>
    )
}

export default Browse;