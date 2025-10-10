import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'
import { MOVIES } from './movies.data'
import { useDebounce } from './hooks/useDebounce'
import { useTheme } from './hooks/useTheme'

function App() {

  const {Theme, toggleTheme} = useTheme()

  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce (searchTerm, 500)

  const movies = MOVIES.filter (movie => movie.name.toLowerCase().includes (debouncedSearch.toLowerCase()))

  return (
    <>
    <div className='min-h-screen w-full bg-white dark:bg-black '>  

    <header className='mb-10 flex items-center justify-center flex-col'> 

    <button className='absolute right-2 top-1' onClick={toggleTheme}>
      {Theme === 'dark' ? '🟡' : '⚫'}
      </button>

      <img src='/Netflix-logo.png'
      alt='Нетфликс лого'
      className='w-auto h-80'
      ></img>
      
    <input 
    type='search'
    value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
    placeholder='Поиск...' 
    className='outline-none border-none' 
    ></input>

    </header>

    <main className='flex gap-6 flex-wrap justify-center'>
       
      {movies.length ? movies.map (movie => (
          <MovieCard
  key={movie.name}            
  image= {movie.image} 
  raiting={movie.raiting}/>
      )) : <p>Фильм не найден</p>
    }
    </main>
    </div>
    </>
  )
}

export default App
