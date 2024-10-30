import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";
import { useSelector } from "react-redux";


const BackgroundTrailer = ({id}) => {

  useGetTrailerVideo(id); // custom hook to get youtube embed key of trailer

  const backgroundTrailerInfo = useSelector(store=>store?.movies?.backgroundTrailer);
  if(!backgroundTrailerInfo) return;

  const { key } = backgroundTrailerInfo;

  return (
    <div>
    <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    
  )
}

export default BackgroundTrailer;