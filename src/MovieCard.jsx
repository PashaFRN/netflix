import { useState } from "react"
import FavoriteButton from "./FavoriteButton"
import { Modal } from "./components/ui/modals"
import { Link } from "react-router-dom"

export default function MovieCard ({image, raiting, youTubeTrailer}){

    const [isOpenTrailer, setIsOpenTrailer] = useState(false)

    return (
        <div className="relative w-[300px] rounded-2xl transition-transform overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 will-change-transform duration-300">
            
            {/* Кнопка открытия трейлера */}
            <button 
                className="absolute top-1 left-1 z-10 transition-all"
                onClick={() => setIsOpenTrailer(true)}
            >
                🎬
            </button>


            <Link className="absolute bottom-2 right-2 z-10 transition-all bg-opacity-50 text-white px-1 py-1 rounded" to={`/movie/${youTubeTrailer}`}>
            🛈
            </Link>

            {/* Модальное окно */}
            {isOpenTrailer && (
                <Modal onClose={() => setIsOpenTrailer(false)}>
                    <iframe 
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/${youTubeTrailer}?si=2lOXJkWpcNJODMSG&amp;controls=0`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>    
                </Modal>
            )}

            <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                IMDb : {raiting} 
            </div>

            <div className="absolute top-2 right-2 z-10">
                <FavoriteButton />
            </div>

            <img src={image} alt="" className="w-full h-110 object-cover"/>
            
        </div>
    )
}