import { useState } from "react"

export default function favoriteButton (){

    const [isFavorite, setIsFavorite] = useState(false)

    return <button onClick={() => setIsFavorite (!isFavorite)}>
        {isFavorite ? '❤️' : '🖤'}
    </button>
}