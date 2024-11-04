import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const GptMovieSuggestions = () => {

  const { gptTmdbResults } = useSelector(store=>store?.gpt);

  
  return (
    <>
         { gptTmdbResults &&
            <div className="bg-purple-200 mt-[3%] text-black bg-opacity-70 font-semibold text-2xl pl-10 rounded-md">
                <MovieCategory categoryName={"Search Results"} categoryMovies={gptTmdbResults} />
            </div>
          }
    </>
  )
}

export default GptMovieSuggestions;