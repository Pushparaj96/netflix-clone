import SUPPORTED_LANGUAGES from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openAI from "../utils/openAI";
import { useRef } from "react";
import { addGptSuggested ,addGptTmdbResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const language = useSelector(store=>store?.appConfig?.language);
  const gptSearchRef = useRef();


  const movieSearchTMDB = async (movie)=>{
     const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_OPTIONS);
     const data = await response.json();
     const { results } = data;
     return results;
  }


  const handleGptSearchClick = async ()=>{

    const searchedVal = gptSearchRef.current.value;

    if (!searchedVal) return null;

    const searchQuery = `act as an movie recommendation for the following query:${searchedVal}.give me five movies comma separated as following example . example : jai bheem,black,amaran,bigil,vaarisu` ;

      const searchCompletion = await openAI.chat.completions.create({
        messages: [{ role: 'user', content: searchQuery }],
        model: 'gpt-3.5-turbo',
      });

      const results = searchCompletion?.choices[0]?.message?.content;
      const gptSuggestion = results.split(",").map(movie=>movie.trim());
      dispatch(addGptSuggested(gptSuggestion));
      
      const searchMovies = gptSuggestion.map(movie=>(
        movieSearchTMDB(movie)
      ));

      const movieResults = await Promise.all(searchMovies);
      const finalResults = movieResults.flat(5).filter(movie=>movie.poster_path);
      
      dispatch(addGptTmdbResults(finalResults));
      
      
      
  }


  return (
    <div className="flex justify-center">
        <form className="grid grid-cols-12 w-1/2 shadow-2xl shadow-white bg-transparent" onSubmit={(e)=>e.preventDefault()}>
        <input ref={gptSearchRef} type="text" className="col-span-9 p-2 md:p-3 outline-none rounded-md placeholder:text-gray-700 placeholder:font-medium text-lg" placeholder={SUPPORTED_LANGUAGES[language].searchInputPlaceholder} />
        <button className="col-span-3 bg-red-600 text-lg font-semibold ml-3 rounded-md" onClick={handleGptSearchClick}>{SUPPORTED_LANGUAGES[language].searchBtnText}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;