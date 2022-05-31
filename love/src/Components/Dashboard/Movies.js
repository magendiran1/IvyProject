
import { useState, useEffect } from "react"


import MovieList from './MovieList'
const Movies = () => {
    const [movies, setMovies] = useState([])
    const getMoviesList = () => {
        fetch("https://615042b3a706cd00179b73dc.mockapi.io/movies")
            .then((res) => { if (res.ok) return res.json(); else  { throw new Error("test")} })
            .then((resdata) => setMovies(resdata))
            .catch((e) => console.log(e))
            }

    useEffect(() => {
        getMoviesList()
    }, [])

    const removeMovie = (id) => {

        let filterMovies = movies.filter((item) => item.id !== id)
        setMovies(filterMovies)

    }

    return (
        <section style={{ margin: '12px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {movies ? movies.map(({ name, poster, rating, summary, id }) => (
                <MovieList key={id} name={name} poster={poster} rating={rating} summary={summary} id={id} removeMovie={removeMovie} />
            )) : null}
        </section>
    )
}

export default Movies;