import { useState } from "react"

export default function FavoriteButton (){

    const [isFavorite, setIsFavorite] = useState(false)

    return <button onClick={() => setIsFavorite (!isFavorite)}>
        {isFavorite ? '❤️' : '🖤'}
    </button>
}
