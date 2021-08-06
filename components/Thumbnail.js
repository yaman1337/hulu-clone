import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="group cursor-pointer p-2 transition duration-100 ease-in sm:hover:scale-105 hover:z-50  ">
            <Image 
            layout="responsive"
            height={1080}
            width={1920}
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
            />
            <div>
                <p className="truncate mx-w-md" 
                onClick={
                    (el) => {
                        el.target.classList.remove('truncate')
                    }
                } 
                onMouseLeave={(el) => el.target.classList.add('truncate')}
                >{result.overview}</p>
                <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold " >{result.title || result.original_name}</h2>
                <p className="flex items-center sm:opacity-0 sm:group-hover:opacity-100">
                    {result.media_type && `${result.media_type} .`}{" "}
                    {result.release_date || result.first_air_date } .{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count} 
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
