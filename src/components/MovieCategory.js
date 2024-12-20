import MovieCard from "./MovieCard";

const MovieCategory = ({categoryName,categoryMovies}) => {
    

  return (
    <div>
        <div className="md:py-5 py-3">
            <h2 className="md:text-2xl text-lg">{categoryName}</h2>
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