import MovieCard from "./MovieCard";


const MovieCategory = ({categoryName,categoryMovies}) => {


  return (
    <div>
        <div className="py-6">
            <h2 className="text-2xl">{categoryName}</h2>
        </div>
        <div className="flex overflow-x-scroll gap-x-5 no-scrollbar">
            {
                categoryMovies.map(movie=>(
                    <MovieCard key={movie.id} posterPath = {movie.poster_path} movieName = {movie.title} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieCategory;