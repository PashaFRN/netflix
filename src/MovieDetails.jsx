import { useParams } from "react-router-dom"
import { MOVIES } from "./movies.data"
import { useMemo } from "react"

export default function MovieDetails(){

    const {id} = useParams()

    const movie = useMemo (() => {

    return MOVIES.find(movie => movie.youTubeTrailer === id)
    },[id])

    if (!movie) return <p>Movie not found</p>
    
    return(<div>

        <img src={movie.image}
      alt='Нетфликс лого'
      className='w-auto h-80'
      />

        <h1>O фильме #{id}</h1>
        <h2>{movie.name}</h2>
    </div>) 
}