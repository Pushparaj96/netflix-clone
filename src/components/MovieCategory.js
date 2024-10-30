import MovieCard from "./MovieCard";


const MovieCategory = ({category,nowPlayingMovies}) => {


  return (
    <div>
        <div className="py-6">
            <h2 className="text-2xl">{category}</h2>
        </div>
        <div className="flex overflow-x-scroll gap-x-5">
            {
                nowPlayingMovies.map(movie=>(
                    <MovieCard key={movie.id} posterPath = {movie.poster_path} movieName = {movie.title} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieCategory;