import FavoriteButton from "./FavoriteButton"

export default function MovieCard ({image, raiting}){
    return <div className="relative w-[300px] rounded-2xl transition-transform overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 will-change-transofrm duration-300">
        
             <div className="absolute bottom-1 left-1">
            IMDb : {raiting} </div>

            <div className="absolute top-1 right-2 z-10"> <FavoriteButton /></div>

            <img src = {image} alt="" className="w-full h-110 object-cover"></img>
        
        
    </div>
}