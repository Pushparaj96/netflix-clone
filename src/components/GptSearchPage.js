import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="GptSearchPageBackground text-black min-h-screen">
      <div className="pt-[25%] md:pt-[14%]">
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearchPage;