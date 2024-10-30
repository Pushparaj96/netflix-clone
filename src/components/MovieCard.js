import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({posterPath,movieName}) => {
  return (
    <div className="w-52 flex-shrink-0 cursor-pointer">
        <img className="rounded-md" alt={`${movieName}-img`} src={TMDB_IMG_URL + posterPath} />
    </div>
  )
}

export default MovieCard;