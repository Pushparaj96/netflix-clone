import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const GptMovieSuggestions = () => {

  const { gptTmdbResults } = useSelector(store=>store?.gpt);

  
  return (
    <>
         { gptTmdbResults &&
            <div className="bg-slate-700 mt-[3%] text-slate-300 bg-opacity-90 md:font-semibold font-medium md:pl-10 pl-5 rounded-md pb-3">
                <MovieCategory categoryName={"Search Results"} categoryMovies={gptTmdbResults} />
            </div>
          }
    </>
  )
}

export default GptMovieSuggestions;