

const TrailerMovieInfo = ({title,overview}) => {
  return (
    <div className="absolute z-10 md:pt-[14%] pt-[45%] pb-[25%] md:pb-0 pl-12 md:space-y-8 space-y-4 text-white bg-gradient-to-tr from-black aspect-video w-full ">
       <p className="md:text-3xl text-xl font-bold pt-16 md:pt-0">{title}</p>
       <p className="w-1/3 text-base font-semibold hidden md:block">{overview}</p>
       <div className="flex items-center">
        <button className="bg-white text-black font-bold md:px-11 px-4 md:py-2 py-0.5 md:text-lg text-base rounded-md shadow-lg me-4 inline-flex items-center hover:scale-105 hover:opacity-80 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-4 me-1 fill-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
           Play</button>
        <button className="bg-gray-800 text-white font-bold px-11 py-2 text-base md:text-lg rounded-md shadow-lg hidden md:inline-flex items-center hover:scale-105 hover:opacity-80 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 me-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

            Info</button>
       </div>
    </div>
  )
}

export default TrailerMovieInfo;