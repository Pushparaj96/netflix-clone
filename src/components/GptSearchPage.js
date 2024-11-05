import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="GptSearchPageBackground text-black min-h-screen">
      <div className="pt-[65%] md:pt-[11%] sm:pt-[27%]">
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearchPage;