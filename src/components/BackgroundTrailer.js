import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";


const BackgroundTrailer = ({id}) => {

  useGetTrailerVideo(id);

  return (
    <div>
    <h2>BackgroundTrailer - {id}</h2>
    </div>
    
  )
}

export default BackgroundTrailer;