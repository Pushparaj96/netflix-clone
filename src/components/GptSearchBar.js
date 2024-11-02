import SUPPORTED_LANGUAGES from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const language = useSelector(store=>store?.appConfig?.language);

  return (
    <div className="flex justify-center">
        <form className="grid grid-cols-12 w-1/2 shadow-2xl shadow-white bg-transparent">
        <input type="text" className="col-span-9 p-2 md:p-3 outline-none rounded-md placeholder:text-gray-700 placeholder:font-medium" placeholder={SUPPORTED_LANGUAGES[language].searchInputPlaceholder} />
        <button className="col-span-3 bg-red-600 text-lg font-semibold ml-3 rounded-md">{SUPPORTED_LANGUAGES[language].searchBtnText}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;