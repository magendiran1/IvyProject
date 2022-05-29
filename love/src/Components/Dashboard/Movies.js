
import { useState, useEffect } from "react"


import MovieList from './MovieList'
const Movies = () => {
    const [movies, setMovies] = useState([])
    const getMoviesList = () => {
        fetch("https://615042b3a706cd00179b73dc.mockapi.io/movies")
            .then((res) => res.json())
            .then((resdata) => setMovies(resdata))
    }

    useEffect(() => {
        getMoviesList()
    }, [])
    return (
        <section style={{  margin: '12px',display: 'flex',gap: '2px',flexWrap: 'wrap',justifyContent:'space-evenly'}}>
            {movies.map(({ name, poster, rating, summary, id }) => (
                <MovieList key={id} name={name} poster={poster} rating={rating} summary={summary} id={id} />
            ))}
        </section>
    )
}

export default Movies;